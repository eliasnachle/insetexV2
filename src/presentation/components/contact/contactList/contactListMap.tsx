import { TbPhoneCall, TbBrandWhatsapp } from 'react-icons/tb'
import { HiOutlineMail } from 'react-icons/hi'

export const contactListMap = [
  {
    figure: <TbPhoneCall />,
    title: 'Telefone',
    description:
      'Conte com nosso time dedicado ao atendimento personalizado dos nossos clientes por telefone.',
    value: '(11) 2359-1308',
    href: 'tel:11-2359-1308',
  },
  {
    figure: <TbBrandWhatsapp />,
    title: 'Whatsapp',
    description: 'Nossa equipe está pronta para responder suas dúvidas e oferecer suporte.',
    value: 'Fale agora!',
    href: 'https://wa.me/551123591308',
  },
  {
    figure: <HiOutlineMail />,
    title: 'E-mail',
    description:
      'Fique à vontade para nos contatar através do e-mail para obter suporte e informações adicionais.',
    value: 'contato@insetex.com.br',
    href: '',
  },
]
