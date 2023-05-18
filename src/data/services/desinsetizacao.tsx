import desinsetizacao from "/public/services/desinsetizacao.jpg";
import DesinsetizacaoIcon from "/public/services/icon/desinsetizacao.svg";
import Gel from "/public/services/icon/gel.svg";

export const serviceItemMap = {
  title: "Desinsetização",
  describe:
    "A Insetex possui a mais alta tecnologia no combate de pragas urbanas e desinsetização: Aranhas, aedes aegypti, baratas,barbeiros, besouros, carunchos, escaravelhos, formigas, gorgulhos, moscas, mosquitos, percevejos, pulgas, piolhos, traças, vespas entre outros. Utilizamos técnicas altamente eficientes para a desinsetização, como aplicações precisas de pulverização e micro pulverização. Aplicações da calda de inseticida em todos os pontos possíveis de infestação, agindo por uma ação imediata e criando uma barreira química residual do produto. Consiste na saturação do ar ambiente com micropartículas da calda de inseticida que serão distribuídos a todos os pontos da área passivamente, através da corrente de ar existente, utilizaremos termo nebulização, nebulização ou pulverizadores em todo o perímetro. Entre em contato e agende uma visita técnica para a desinsetização da sua casa e/ou sua empresa.",
  img: desinsetizacao,
  imgAlt: "Desinsetização",
  itemDetail: [
    {
      icon: <DesinsetizacaoIcon />,
      title: "Gel",
      describe:
        "O confortável e eficiente sistema gel e massinha, totalmente inodoro; cuja aplicação é direcionada a focos e pontos estratégicos. O produto age por reação em cadeia efeito dominó; no caso das formigas, possibilita que o produto seja levado para dentro da colônia eliminando-a por completo.",
    },
    {
      icon: <Gel />,
      title: "Gel",
      describe:
        "A desinsetização com líquido é realizada através de micropulverização com bombas de alta pressão. O tratamento abrange a cobertura de todo piso, rodapé, contorno dos batentes de portas, janelas e fendas localizadas na edificação. Em alguns casos, também é feito o uso da aplicação de gel inodoro e pó químico nos conduítes como forma de controle dessas pragas.",
    },
  ],
};
