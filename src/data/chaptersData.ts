export interface ParagraphBlock {
  id: string;
  text?: string;
  dialogue?: string;
  videoUrl?: string; // Vídeo opcional atrelado ao parágrafo
  alert?: string;
}

export interface Scene {
  title: string;
  blocks: ParagraphBlock[];
}

export const CHAPTER_ONE_SCENES: Scene[] = [
  {
    title: "Cena I: O Despertar",
    blocks: [
      { id: "p1", text: "O silêncio era absoluto." },
      { id: "p2", text: "O rapaz abriu os olhos lentamente, como se estivesse emergindo de um sonho profundo. A luz tocava seu rosto de forma suave, revelando um cenário morto ao seu redor. Ele permaneceu ali por alguns segundos, deitado, tentando entender onde estava — ou até mesmo quem era." },
      { id: "v1", videoUrl: "/capitulo1/videos/Despertar.mp4" }, // Vídeo mapeado aqui!
      { id: "p3", text: "Com esforço, sentou-se." },
      { id: "p4", text: "Seus olhos percorreram o ambiente: construções antigas, quebradas, consumidas pelo tempo. Ruínas de uma cidade que claramente havia sido palco de algo grandioso… e destrutivo. Não havia sinais de vida. Nenhum som. Apenas abandono." },
      { id: "p5", text: "Sua mente estava vazia. Nada vinha. Nenhuma memória. Nenhum rosto. Nenhuma história. Apenas um nome." },
      { id: "d1", dialogue: "— Caleb…" },
      { id: "p6", text: "Ele levou a mão direita ao rosto — e então congelou." },
      { id: "p7", text: "Chamas. Uma chama azul-escura envolvendo sua mão, pulsando de forma silenciosa, como se estivesse viva. O fogo se movia com suavidade, quase como uma respiração. Mas não queimava." },
      { id: "v2", videoUrl: "/capitulo1/videos/chamas.mp4" },
      { id: "p8", text: "Caleb arregalou os olhos, esperando dor… mas ela não veio. Em vez disso, sentiu algo diferente. Calor. Um calor profundo, que não feriu — pelo contrário, parecia preencher seu corpo com uma energia estranha, quase reconfortante. A chama começou a se dissipar lentamente, como se respondesse ao seu estado." },
      { id: "p9", text: "Confuso, ele se levantou com cuidado. Seus olhos voltaram a explorar o lugar. A cidade não tinha saída visível. Ao redor, uma enorme formação rochosa cercava tudo — alta, contínua, sufocante. Parecia uma montanha." },
      { id: "p10", text: "Sem pensar muito, Caleb caminhou até sua base. Vinhas grossas se estendiam pelas pedras, como se a própria natureza tentasse engolir aquele lugar esquecido. Ele começou a escalar. O esforço era grande, mas algo dentro dele o impulsionava. Como se aquela energia ainda pulsasse em seu corpo." },
      { id: "p11", text: "Após alguns minutos, alcançou o topo. E então… parou. Virou-se lentamente. Seu olhar encontrou a cidade novamente — mas, agora, de cima." },
      { id: "v3", videoUrl: "/capitulo1/videos/escalada.mp4" },
      { id: "p12", text: "E foi ali que percebeu. Não era uma montanha. Nunca foi. A cidade… havia sido empurrada para baixo. Afundada. Como uma cicatriz no mundo." }
    ]
  }
  // Daqui para frente você pode adicionar a Cena II, III e IV mapeando parágrafo por parágrafo de forma limpa!
];