import MoscowPictures from '@data/citiesPictures/moscowPictures';
import KazanPictures from '@data/citiesPictures/kazanPictures';
import NovosibirskPictures from '@data/citiesPictures/novosibirskPictures';
import SpbPictures from '@data/citiesPictures/spbPictures';
import OmskPictures from '@data/citiesPictures/omskPictures';
import NizhnyNovgorodPictures from '@data/citiesPictures/nizhnyNovgorod';
import EkbPictures from '@data/citiesPictures/ekbPictures';
import ChelyabinskPictures from '@data/citiesPictures/chelyabinskPuctures';

type MoscowPictures = {
  moscowCity: string;
  moscowPavilion: string;
  moscowKremlin: string;
  moscowUniversity: string;
  moscowVasilBlazhSobor: string;
};

type SpbPictures = {
  peterhof: string;
  lazarevBridge: string;
  nevskyProspect: string;
  kazanCathedral: string;
  spasNaKrovi: string;
};

type KazanPictures = {
  kazanKremlin: string;
  kulSharifMosque: string;
  templeOfAllReligions: string;
  baumanaStreet: string;
  kazanFamilyCenter: string;
};

type NovosibirskPictures = {
  akademgorodok: string;
  krasnyProspekt: string;
  novosibirskStateUniversity: string;
  novosibirskZoo: string;
  operaAndBalletTheatre: string;
};

type OmskPictures = {
  omskDramaTheatre: string;
  assumptionCathedral: string;
  vrubelMuseum: string;
  vlksmPark: string;
  omskCircus: string;
};

type NizhnyNovgorodPictures = {
  chkalovStaircase: string;
  bolshayaPokrovskayaStreet: string;
  verkhnevolzhskayaEmbankment: string;
  nizhnyNovgorodArtMuseum: string;
  nizhnyNovgorodKremlin: string;
};

type EkbPictures = {
  sevastyanovsHouse: string;
  vysotskyTower: string;
  keyboardMonument: string;
  ganinaYamaMonastery: string;
  churchOnTheBlood: string;
};

type ChelyabinskPictures = {
  alyoshaMonument: string;
  gagarinPark: string;
  kirovkaStreet: string;
  operaAndBalletTheatre: string;
  revolutionSquare: string;
};

type CityImagesMap = {
  moscow: MoscowPictures;
  spb: SpbPictures;
  kazan: KazanPictures;
  novosibirsk: NovosibirskPictures;
  omsk: OmskPictures;
  nizhnyNovgorod: NizhnyNovgorodPictures;
  ekb: EkbPictures;
  chelyabinsk: ChelyabinskPictures;
};

const cityImagesMap: CityImagesMap = {
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
