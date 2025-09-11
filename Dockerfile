FROM node:20-alpine

# Create non-root user
RUN addgroup app && adduser -S -G app app

# Work dir
WORKDIR /app

# --- Enable Corepack + prepare Yarn version ---
USER root
RUN corepack enable 
# && corepack prepare yarn@4.9.1 --activate

# Copy only dependency files first
COPY package*.json ./
COPY .yarnrc.yml yarn.lock ./
COPY .yarn ./.yarn

# Give permissions to app user
RUN chown -R app:app /app

# Install dependencies (now Yarn 4.9.1 is active)
RUN yarn install --immutable

# Copy the rest of the files
COPY . .

# Make sure .next (and other runtime dirs) are owned by app user
RUN mkdir -p .next && chown -R app:app /app

# Switch to app user
USER app

EXPOSE 5786
CMD ["yarn","dev"]
