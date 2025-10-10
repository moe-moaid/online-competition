export type Category =
  | 'Hip Pop'
  | 'Rap'
  | 'RNB'
  | 'Afrobeat'
  | 'Raggae'
  | 'Dancehall'
  | 'Reggarton'
  | 'Others';

export type VideoUploadFormType = {
  title: string;
  description: string;
  category: Category;
  video: FileList;
  artistId: string;
};
