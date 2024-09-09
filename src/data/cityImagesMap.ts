import MoscowPictures from '@data/citiesPictures/moscowPictures';
import KazanPictures from '@data/citiesPictures/kazanPictures';
import NovosibirskPictures from '@data/citiesPictures/novosibirskPictures';
import SpbPictures from '@data/citiesPictures/spbPictures';
import OmskPictures from '@data/citiesPictures/omskPictures';
import NizhnyNovgorodPictures from '@data/citiesPictures/nizhnyNovgorod';
import EkbPictures from '@data/citiesPictures/ekbPictures';
import ChelyabinskPictures from '@data/citiesPictures/chelyabinskPuctures';

export type MoscowPicturesType = {
  moscowCity: string;
  moscowPavilion: string;
  moscowKremlin: string;
  moscowUniversity: string;
  moscowVasilBlazhSobor: string;
};

export type SpbPicturesType = {
  peterhof: string;
  lazarevBridge: string;
  nevskyProspect: string;
  kazanCathedral: string;
  spasNaKrovi: string;
};

export type KazanPicturesType = {
  kazanKremlin: string;
  kulSharifMosque: string;
  templeOfAllReligions: string;
  baumanaStreet: string;
  kazanFamilyCenter: string;
};

export type NovosibirskPicturesType = {
  akademgorodok: string;
  krasnyProspekt: string;
  novosibirskStateUniversity: string;
  novosibirskZoo: string;
  operaAndBalletTheatre: string;
};

export type OmskPicturesType = {
  omskDramaTheatre: string;
  assumptionCathedral: string;
  vrubelMuseum: string;
  vlksmPark: string;
  omskCircus: string;
};

export type NizhnyNovgorodPicturesType = {
  chkalovStaircase: string;
  bolshayaPokrovskayaStreet: string;
  verkhnevolzhskayaEmbankment: string;
  nizhnyNovgorodArtMuseum: string;
  nizhnyNovgorodKremlin: string;
};

export type EkbPicturesType = {
  sevastyanovsHouse: string;
  vysotskyTower: string;
  keyboardMonument: string;
  ganinaYamaMonastery: string;
  churchOnTheBlood: string;
};

export type ChelyabinskPicturesType = {
  alyoshaMonument: string;
  gagarinPark: string;
  kirovkaStreet: string;
  operaAndBalletTheatre: string;
  revolutionSquare: string;
};

export type CityImagesMapType = {
  moscow: MoscowPicturesType;
  spb: SpbPicturesType;
  kazan: KazanPicturesType;
  novosibirsk: NovosibirskPicturesType;
  omsk: OmskPicturesType;
  nizhnyNovgorod: NizhnyNovgorodPicturesType;
  ekb: EkbPicturesType;
  chelyabinsk: ChelyabinskPicturesType;
};

const cityImagesMap: CityImagesMapType = {
  moscow: MoscowPictures,
  spb: SpbPictures,
  kazan: KazanPictures,
  novosibirsk: NovosibirskPictures,
  omsk: OmskPictures,
  nizhnyNovgorod: NizhnyNovgorodPictures,
  ekb: EkbPictures,
  chelyabinsk: ChelyabinskPictures,
};

export default cityImagesMap;
