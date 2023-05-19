import descupinizacao from "/public/services/descupinizacao.jpg";
import {GiChemicalDrop} from "@react-icons/all-files/gi/GiChemicalDrop";
import {BiShieldQuarter} from "@react-icons/all-files/bi/BiShieldQuarter";

export const serviceItemMap = {
  title: "Descupinização",
  describe:
    "Descupinização é o processo de controle e eliminação de cupins em um ambiente, seja ele residencial, comercial ou industrial. Os cupins são insetos que se alimentam de madeira, papel e outros materiais contendo celulose, podendo causar danos estruturais em edifícios e outros objetos. O processo de descupinização pode envolver várias etapas, que podem incluir a identificação da espécie de cupim, a inspeção do ambiente, o tratamento químico, a aplicação de barreiras físicas, a utilização de iscas, entre outros métodos. Os métodos de descupinização variam de acordo com a gravidade da infestação e as características do ambiente. Em casos mais graves, pode ser necessária a utilização de produtos químicos mais potentes, como inseticidas e gases tóxicos. Porém, esses métodos devem ser realizados por profissionais qualificados, pois podem oferecer riscos à saúde humana e ao meio ambiente. ",
  img: descupinizacao,
  imgAlt: "Descupinização",
  itemDetail: [
    {
      icon: <GiChemicalDrop />,
      title: "Tratamento químico",
      describe:
        "É o método mais utilizado na descupinização. Consiste na aplicação de produtos químicos específicos para o controle de cupins. Esses produtos podem ser pulverizados, injetados no solo, aplicados em peças de madeira ou utilizados como iscas. Eles agem para matar os cupins e impedir sua reprodução.",
    },
    {
      icon: <BiShieldQuarter />,
      title: "Barreiras químicas",
      describe:
        "São aplicadas ao redor da estrutura para criar uma barreira protetora contra a infestação de cupins. Essas barreiras químicas são geralmente aplicadas durante a construção ou durante a descupinização como uma medida preventiva.",
    },
  ],
};
