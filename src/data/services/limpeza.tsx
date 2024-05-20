import limpeza from '/public/services/limpeza.jpg'
import { AiOutlineClear } from '@react-icons/all-files/ai/AiOutlineClear'
import { FaTablets } from '@react-icons/all-files/fa/FaTablets'

export const serviceItemMap = {
  title: "Limpeza de Caixas D' Água",
  describe:
    "A limpeza de caixas d'água é um processo de manutenção que tem como objetivo remover resíduos e sujeiras que se acumulam no fundo e nas paredes das caixas d'água, a fim de garantir a qualidade da água armazenada. Essa é uma medida importante para prevenir a proliferação de bactérias, vírus e outros micro-organismos que podem contaminar a água e prejudicar a saúde das pessoas que a consomem.A limpeza de caixas d'água deve ser realizada periodicamente, de acordo com as recomendações das autoridades sanitárias locais, que geralmente indicam um intervalo de tempo entre seis meses e um ano, dependendo do tamanho da caixa d'água e da demanda de consumo de água.Para realizar a limpeza de caixas d'água, é necessário esvaziar completamente a caixa, remover todos os resíduos acumulados e realizar a desinfecção da caixa com produtos específicos. É importante que esse processo seja realizado por profissionais capacitados e que utilizem equipamentos adequados para garantir a efetividade da limpeza e evitar riscos à saúde.",
  img: limpeza,
  imgAlt: "Limpeza de Caixas D' Água",
  itemDetail: [
    {
      icon: <FaTablets />,
      title: "Pastilhas",
      describe:
        "As pastilhas de limpeza de caixas d'água são populares devido à sua praticidade. Elas contêm cloro orgânico e são colocadas diretamente na água para eliminar bactérias e micro-organismos. No entanto, é importante ressaltar que essa técnica não é adequada para acúmulos excessivos de sujeira. É crucial seguir as instruções do fabricante para garantir resultados eficazes e água de qualidade.",
    },
    {
      icon: <AiOutlineClear />,
      title: "Lavagem",
      describe:
        "A lavagem da caixa d'água é realizada utilizando-se água limpa e escovas apropriadas. Recomenda-se utilizar uma solução de água com cloro ou outro desinfetante adequado para eliminar possíveis bactérias e microrganismos. As paredes internas e o fundo da caixa d'água devem ser escovados cuidadosamente para garantir uma limpeza completa.",
    },
  ],
}
