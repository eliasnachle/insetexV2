import sanitizacao from "/public/services/sanitizacao.jpg";
import {GiVacuumCleaner} from "react-icons/gi"
import DesinsetizacaoIcon from "/public/services/icon/desinsetizacao.svg";


export const serviceItemMap = {
  title: "Sanitização",
  describe:
    "Sanitização é o processo de higienização e desinfecção de ambientes, equipamentos e superfícies para eliminar ou reduzir a presença de microrganismos, como bactérias, vírus, fungos e protozoários. Esse processo é importante para garantir a saúde e segurança de pessoas e animais que frequentam o ambiente, bem como para prevenir a transmissão de doenças. A sanitização pode ser realizada em diversos tipos de ambientes, como residências, escritórios, hospitais, indústrias alimentícias, entre outros. O processo pode envolver a utilização de produtos químicos, como desinfetantes e sanitizantes, ou a aplicação de tecnologias de alta eficiência, como a luz ultravioleta e o ozônio. Antes da sanitização, é importante realizar a limpeza das superfícies e equipamentos para remover sujeiras e resíduos que possam interferir no processo. A escolha dos produtos e equipamentos adequados para a sanitização dependerá do tipo de ambiente e do nível de contaminação. Os produtos químicos devem ser preparados de acordo com as instruções do fabricante e utilizados com equipamentos de proteção individual para garantir a segurança dos profissionais. Já as tecnologias de alta eficiência, como a luz ultravioleta e o ozônio, podem ser aplicadas por profissionais especializados. Vale ressaltar que a sanitização deve ser realizada por profissionais especializados.",
  img: sanitizacao,
  imgAlt: "Sanitização",
  itemDetail: [
    {
      icon: <GiVacuumCleaner />,
      title: "Limpeza manual",
      describe:
        "A limpeza manual é um dos métodos mais básicos e comuns de sanitização. Envolve a remoção de sujeira, poeira e detritos das superfícies utilizando água, detergentes e escovas ou panos. Embora a limpeza manual não elimine necessariamente os microrganismos, ela é uma etapa essencial antes da desinfecção propriamente dita.",
    },
    {
      icon: <DesinsetizacaoIcon />,
      title: "Pulverização",
      describe:
        "A pulverização é um método eficiente de sanitização, utilizando um pulverizador para aplicar produtos desinfetantes em forma de névoa. É amplamente utilizado para cobrir grandes áreas e alcançar superfícies de difícil acesso. A pulverização contribui para a eliminação de microrganismos e a desinfecção efetiva do ambiente.",
    },
  ],
};
