import desentupimento from "/public/services/desentupimento.jpg";
import {GiWaterfall} from "@react-icons/all-files/gi/GiWaterfall";
import {GiTeePipe} from "@react-icons/all-files/gi/GiTeePipe";

export const serviceItemMap = {
  title: "Desentupimento",
  describe:
    "Desentupimento é o processo de desobstrução de tubulações e encanamentos que estão bloqueados ou entupidos, seja por resíduos sólidos, gorduras, cabelos, papel higiênico, entre outros materiais. Esse problema pode ocorrer em diversos locais, como residências, comércios, indústrias e prédios públicos.O processo de desentupimento pode ser realizado de diversas formas, dependendo do local e da gravidade da obstrução. Vale ressaltar que o desentupimento deve ser realizado por profissionais especializados, que possuem os equipamentos e conhecimentos necessários para garantir a segurança e eficácia do processo. Além disso, é importante adotar medidas preventivas, como evitar o descarte de resíduos sólidos e gorduras em pias e vasos sanitários, realizar a limpeza regular dos encanamentos e evitar o acúmulo de cabelos em ralos e tubulações.",
  img: desentupimento,
  imgAlt: "Desentupimento",
  itemDetail: [
    {
      icon: <GiWaterfall />,
      title: "Hidrojateamento",
      describe:
        "É um método muito eficaz e versátil. Envolve o uso de jatos de água de alta pressão para remover obstruções. A pressão da água é capaz de desalojar e empurrar os detritos e resíduos acumulados nas tubulações, desobstruindo o sistema.",
    },
    {
      icon: <GiTeePipe />,
      title: "Máquinas desentupidoras",
      describe:
        "São equipamentos projetados especificamente para desentupir tubulações. Essas máquinas geralmente têm uma ponta especial que é inserida na tubulação e pode girar ou vibrar para desintegrar e remover a obstrução. Elas são frequentemente utilizadas em entupimentos de menor gravidade.",
    },
  ],
};
