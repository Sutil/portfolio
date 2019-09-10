import netfoods from '../assets/images/netfoods.png';
import iadtec from '../assets/images/iadtec.png';
import objective from '../assets/images/objective.png';
import multiutilidades from '../assets/images/multiutilidades.png';
import flyorcry from '../assets/images/flyorcry.webp';

export default {
  name: 'Eduardo Sutil',
  coverText: 'Software Develoer',
  portifolio: [
    {
      id: '1',
      image:
        'https://github.com/Sutil/footshoes-mobile/raw/master/readme-img_.gif',
      date: '2019-09-20',
      title: 'Estudos de aplicação para e-commerce com React Native',
      type: 'STUDY',
      description: [
        'FootShoes é um aplicativo desenvolvido para estudar a aplicação de conceitos de e-commerce utilizando React Native',
        'O foco do estudo foi o uso de Redux com Redux-Saga mantendo as informações e a comunicação com o backend totalmente centralizadas, diminuindo o número de requisições e aumentando a confiabilidade do software.',
        'Nesta aplicação também foi utilizado um cabeçalho com componente customizado com um badge que acompanha a quantidade de items no carrinho.',
      ],
      tags: [
        'React Native',
        'Redux',
        'Redux Saga',
        'REST',
        'Axios',
        'Eslint',
        'Prettier',
      ],
      github: 'https://github.com/Sutil/footshoes-mobile',
    },
    {
      id: '2',
      image: 'https://github.com/Sutil/footshoes/raw/master/image-readme.gif',
      date: '2019-09-20',
      title: 'ReactJS Study for e-commerce',
      type: 'STUDY',
      description: [
        'FootShoes é uma aplicação web desenvolvida para estudar a aplicação de conceitos de e-commerce utilizando ReactJS',
        'O foco do estudo foi o uso de Redux com Redux-Saga mantendo as informações e a comunicação com o backend totalmente centralizadas, diminuindo o número de requisições e aumentando a confiabilidade do software.',
      ],
      tags: [
        'ReactJS',
        'Redux',
        'Redux Saga',
        'REST',
        'Axios',
        'Eslint',
        'Prettier',
      ],
      github: 'https://github.com/Sutil/footshoes',
    },
    {
      id: '3',
      image: 'https://github.com/Sutil/Github-View/raw/master/screen2.png',
      date: '2019-09-20',
      title: 'React Native Study - Github Viewer',
      type: 'STUDY',
      description: [
        'O aplicativo utiliza a API do Github para buscar usuários, listar seus repositórios favoritos e mostrar dentro de um Webview cada repositório.',
        'O objetivo desse projeto foi realizar estudos do funcionamento da navegação, estilização do cabeçalho da aplicação, chamadas API com axios, uso do componente WebView, infinit scroll e pull to refresh',
      ],
      tags: [
        'React Native',
        'React Navigation',
        'Axios',
        'Eslint',
        'Prettier',
        'Infinit Scroll',
        'Pull to Refresh',
      ],
      github: 'https://github.com/Sutil/Github-View',
    },
    {
      id: '4',
      image: netfoods,
      date: '2019-09-20',
      title: 'Desenvolvedor full-stack na NetFoods',
      type: 'JOB',
      description: [
        'NetFoods é uma startup que conecta restaurantes a forncedores.',
        'Trabalhei na NetFoods atuando como desevolvdor full-stack com Java Spring no backend, Angular no frontend e PWA com Angular no mobile.',
        'Builds automatizados utilizando Git, Docker, Jenkins e Google Cloud',
        'Também implementei integrações com microserviços, enfileiramento de Jobs em segundo plano utilizando RabbitMQ, PubSub e Redis',
      ],
      tags: [
        'Java',
        'Spring',
        'Angular',
        'MySql',
        'MongoDB',
        'Docker',
        'Jenkins',
        'Google Cloud',
        'PubSub',
        'RabbitMQ',
        'Microserviços',
      ],
      production: 'https://netfoods.com.br',
    },
    {
      id: '5',
      image: iadtec,
      date: '2018-09-20',
      title: 'Desenvolvedor full-stack na IADTEC',
      type: 'JOB',
      description: [
        'Gerenciamento de desenvolvimento e fluxo de entrega de software usando Jenkins, Azure, AWS e outros.',
        'Gerenciamento de equipe.',
        'Projetos para gerenciamento de presença de funcionários e promotores em redes atacadistas.',
      ],
      tags: [
        'Java',
        'Spring',
        'Angular',
        'PostgreSQL',
        'Jenkins',
        'Azure',
        'AWS',
      ],
    },
    {
      id: '6',
      image: objective,
      date: '2018-09-20',
      title: 'Desenvolvedor de software',
      type: 'JOB',
      description: [
        'Desenvolvimento de sistemas CRM para empresas de telecom.',
        'Automatizações de processos e microserviços',
      ],
      tags: ['Java', 'Jenkins', 'JBoss', 'AWS'],
    },
    {
      id: '7',
      image: multiutilidades,
      date: '2018-09-20',
      title: 'Aplicativo para gerenciamento de serviços',
      type: 'JOB',
      description: [
        'O aplicativo da multiutilidades foi desenvolvido e entregue em um mês.',
        'Nele, aquipe pode agendar, concluir, cancelar e receber serviços.',
        'Foi desenvolvido utilizando React Native e Firebase.',
      ],
      tags: ['React Native', 'Firebase'],
      playStore:
        'https://play.google.com/store/apps/details?id=com.multiutilidades',
    },
    {
      id: '8',
      image: flyorcry,
      date: '2018-09-20',
      title: 'Game Fly or Cry',
      type: 'JOB',
      description: [
        'Game divertido que imita o comportametno do Flap Bird.',
        'Foi desenvolvido com Godot Engine e com uma  temática de faculdade de tecnologia.',
      ],
      tags: ['Godot', 'python', 'Game'],
      playStore:
        'https://play.google.com/store/apps/details?id=br.com.neostech.flyorcry',
      bitbucket: 'https://bitbucket.org/sutil/fly-or-cry',
    },
  ],
};
