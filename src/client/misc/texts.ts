const titlePort = ["","Sobre Mim", "Projetos","Clone de Voz","Encheu","Impressora","LokiGPT", "Visão Drumonsters", "Mina em RV", "Contato"]
const titleEng =  ["","About Me", "Projects","Voice Clone","Encheu","Printer","LokiGPT", "Drumonsters's Vision", "Mine in VR", "Contact"]
const paragraphPort = [
    '',
        'Como estudante de Engenharia da Computação na Universidade Federal de Itajubá,\
         estou imerso no mundo da tecnologia e inovação, conectando teoria e prática.\
          Faço parte da equipe de robótica Drumonsters, onde minha paixão por inteligência\
           artificial e visão computacional se transforma em realidade. \
           Contribuo para que nossos robôs possam interpretar seu ambiente e tomar \
           decisões inteligentes. Clique nas logos para saber mais.',

          "",
          'Com a mentoria do professor Juliano de Almeida Monte-Mor,\
           embarquei em um desafio único: dar uma nova vida às vozes dos \
           ícones culturais brasileiros Carlos Drummond e Cândido Portinari.\
            Utilizando ferramentas totalmente open-source e com poucos trechos de falas, \
            conseguimos capturar a essência e personalidade de suas vozes. Um projeto que\
             celebra a união da arte e tecnologia para preservar a história. \
             Clique no rádio para acessar a matéria completa na VEJA.',
           'Em 2021, pela primeira vez usei inteligência artificial em um problema real da minha realidade: a previsão de enchentes em Governador Valadares. Utilizando a stack MERN, desenvolvi uma plataforma que, embora ainda esteja em fase de testes, já demonstra a capacidade de prever enchentes com 80% de precisão e até sete dias de antecedência, além de oferecer previsões personalizadas para cada residência da cidade. Clique no celular para mais informações.',
            'Em uma caminhada casual em 2018, um achado inesperado se transformou no início de uma jornada. Um computador abandonado, resgatado das ruas, foi o ponto de partida para a construção de uma impressora. O projeto viralizou no Twitter e chamou a atenção da mídia, com destaque em uma reportagem na Record. Essa pequena impressora não é apenas um exemplo de reciclagem inteligente, mas também uma demonstração do poder da engenharia aplicada. Confira a matéria clicando na impressora.',
             'Imagine um modelo que possa imitar você em conversas no WhatsApp!  O LokiGPT é minha criação mais complexa até hoje. Utilizando LLMs e ferramentas open-source, estou desenvolvendo um modelo treinado com todas as minhas conversas do WhatsApp. E futuramente, planejo criar ferramentas que permitirão que qualquer pessoa treine seu próprio modelo com suas conversas pessoais.',
              'Meu ingresso na equipe marcou o início de um desafio: aprimorar a visão computacional para localizar robôs em campo. Treinei um modelo YOLO, uma técnica avançada de detecção de objetos. O diferencial do projeto foi o uso exclusivo de dados sintéticos, o que eliminou a necessidade de coleta e classificação manual de dados. Isso não só simplificou o desenvolvimento, mas também se mostrou superior a outras técnicas de visão computacional tradicionais. Atualmente, em colaboração com o professor Juliano de Almeida Monte-Mor, estou desenvolvendo um artigo científico sobre o tema.',
               'Sob a orientação do professor Juliano, criei uma experiência imersiva que leva o usuário para o centro de uma mina virtual. Usando a tecnologia Leap Motion para o rastreamento das mãos, os visitantes podiam interagir com os minerais da região, enquanto informações detalhadas sobre cada mineral eram exibidas. Desenvolvido com Unity e C#, e experimentado através de um Oculus DK2, o projeto foi destaque em um evento no museu de Itabira, com planos de atualização para óculos de realidade virtual mais modernos. Toque no celular para saber mais.',
                '1Graduando em Engenharia da Computação pela Universidade Federal de Itajubá, \
                também faço parte da equipe de robótica Drumonsters como desenvolvedor. \
                Meu papel principal é aplicar meus conhecimentos em inteligência artificial\
                 e visão computacional para desenvolver soluções que atendam às necessidades \
                 do nosso setor.',
]

const paragraphEng = [
  '',
  'As a Computer Engineering student at the Federal University of Itajubá, I am immersed in the world of technology and innovation, bridging theory and practice. I am part of the Drumonsters robotics team, where my passion for artificial intelligence and computer vision becomes a reality. I contribute to our robots’ ability to interpret their environment and make intelligent decisions. Click on the logos to learn more.',
  '',
  'With the mentorship of Professor Juliano de Almeida Monte-Mor, I embarked on a unique challenge: to give new life to the voices of Brazilian cultural icons Carlos Drummond and Cândido Portinari. Using entirely open-source tools and with only a few speech samples, we managed to capture the essence and personality of their voices. A project that celebrates the union of art and technology to preserve history. Click on the radio to access the full article in VEJA.',
  'In 2021, for the first time, I used artificial intelligence to address a real-world problem in my community: flood prediction in Governador Valadares. Using the MERN stack, I developed a platform that, although still in the testing phase, has already shown the ability to predict floods with 80% accuracy up to seven days in advance. It also provides personalized forecasts for each residence in the city. Tap on the phone for more information.',
  "During a casual walk in 2018, an unexpected find turned into the beginning of a journey. An abandoned computer, rescued from the streets, was the starting point for building a printer. The project went viral on Twitter and caught the attention of the media, being featured in a report on Record, a Brazilian network. This small printer is not just an example of smart recycling, but also a demonstration of the power of applied engineering. Check out the story by clicking on the printer.",
  'Imagine a model that can mimic you in WhatsApp conversations! LokiGPT is my most complex creation to date. Using LLMs and open-source tools, I’m developing a model trained with all my WhatsApp conversations. And in the future, I plan to create tools that will allow anyone to train their own model with their personal conversations',
  'My joining the team marked the beginning of a challenge: to enhance computer vision for locating robots on the field. I trained a YOLO model, an advanced object detection technique. The project’s distinction was the exclusive use of synthetic data, which eliminated the need for manual data collection and classification. This not only simplified development but also proved superior to other traditional computer vision techniques. Currently, in collaboration with Professor Juliano de Almeida Monte-Mor, I am developing a scientific paper on the subject.',
  'Under the guidance of Professor Juliano, I created an immersive experience that transports the user to the center of a virtual mine. Utilizing Leap Motion technology for hand tracking, visitors could interact with the region’s minerals, while detailed information about each mineral was displayed. Developed with Unity and C#, and experienced through an Oculus DK2, the project was featured at an event at the Itabira museum, with plans for updates to more modern virtual reality glasses. Tap on the mobile to learn more.',
  '1Computer Engineering student at the Federal University of Itajubá, I am also part of the Drumonsters robotics team as a developer. My main role is to apply my knowledge in artificial intelligence and computer vision to develop solutions that meet the needs of our sector.',
]

const paragraphPos = [0,1, 0, 1, 0, 1, 0, 1, 1, 1]

const texts = [[titlePort, paragraphPort], [titleEng, paragraphEng],paragraphPos]
export default texts
