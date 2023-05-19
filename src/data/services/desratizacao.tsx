import desratizacao from "/public/services/desratizacao.jpg";
import {FaCubes} from "@react-icons/all-files/fa/FaCubes";
import {GiWolfTrap} from "@react-icons/all-files/gi/GiWolfTrap";

export const serviceItemMap = {
  title: "Desratização",
  describe:
    "O combate e extermínio de roedores nem sempre se dará com a eliminação de todos os indivíduos do local, uma desratização eficiente irá tanto eliminar quanto manter afastado qualquer roedor que queira adentrar ao local. Nossa metodologia abrange todos os tipos de roedores. Esse processo pode incluir várias métodos, como a aplicação de produtos químicos para matar os roedores, o uso de armadilhas para capturá-los, a vedação de possíveis pontos de entrada, entre outros métodos. A desratização é importante para prevenir a transmissão de doenças causadas pelos ratos e para evitar danos materiais causados por esses animais. É importante lembrar que a desratização deve ser realizada por profissionais especializados, que possuem os equipamentos e conhecimentos necessários para garantir a segurança e eficácia do processo.",
  img: desratizacao,
  imgAlt: "Desratização",
  itemDetail: [
    {
      icon: <FaCubes />,
      title: "Iscas envenenadas",
      describe:
        "Essa é uma das abordagens mais comuns para a desratização. Iscas envenenadas são colocadas em áreas onde os ratos são conhecidos por se alimentarem. As iscas geralmente contêm substâncias tóxicas, como anticoagulantes, que matam os roedores após a ingestão. É importante usar iscas seguras e colocá-las em locais inacessíveis para crianças e animais de estimação.",
    },
    {
      icon: <GiWolfTrap />,
      title: "Armadilhas",
      describe:
        "Existem vários tipos de armadilhas disponíveis para capturar ratos. As armadilhas mais comuns são as de captura (como as gaiolas) e as de matar (como as ratoeiras). As armadilhas devem ser posicionadas em locais estratégicos, onde os ratos costumam passar, como ao longo de paredes, embaixo de móveis ou perto de buracos e fendas.",
    },
  ],
};
