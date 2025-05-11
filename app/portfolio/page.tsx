import Button from "../../components/btn";

export default function Portfolio () {
    return(
    <div className="wrapper">
        <div className="flex flex-col gap-4 w-full p-2">
        <div className="flex flex-col w-full justify-center items-center bg-stone-900 rounded-xl text-white shadow shadow-black/50">
          <h1 className="bg-[#2f2e41] p-4 rounded-xl text-[18px] text-[#73ff63] shadow font-extrabold w-full">
          Raiolaranja : Seu companheiro nas corridas!
          </h1>
          <div className="flex flex-col gap-2 px-4 py-2">
            <p>Este é um WebApp para ajudar a todos os corredores que desejam planejar melhor seus treinos, seja na esteira ou na rua. <br/>
            Temos Ferramentas como calculadora de "Pace estimado", "Tempo estimado", "Distância estimada", "Intensidade de corrida" e 
            conversões como "Pace para Km/h", utilizado muito por quem treina em esteiras.</p>
            <Button name="Visitar Projeto" href="https://raiolaranja.vercel.app" cor="bg-[#4ec963] text-black font-semibold"/>
          </div>
        </div>

        <div className="flex flex-col w-full justify-center items-center bg-stone-900 rounded-xl text-white shadow shadow-black/50">
          <h1 className="bg-[#2f2e41] p-4 rounded-xl text-[18px] text-[#73ff63] shadow font-extrabold w-full">
          Clima Tempo
          </h1>
          <div className="flex flex-col gap-2 px-4 py-2">
            <p>Aqui você encontra informações sobre Temperatura, Umidade e Vento em tempo real! <br/> 
            A aplicação se comunica com 2 apis, sendo que uma busca todas as informações sobre o clima e outra que busca imagens de acordo com a localização pesquisada.</p>
            <Button name="Visitar Projeto" href="https://mrclimatempo.netlify.app/" cor="bg-[#4ec963] text-black font-semibold"/>
          </div>
        </div>

        <div className="flex flex-col w-full justify-center items-center bg-stone-900 rounded-xl text-white shadow shadow-black/50">
          <h1 className="bg-[#2f2e41] p-4 rounded-xl text-[18px] text-[#73ff63] shadow font-extrabold w-full">
          Flash Lanches
          </h1>
          <div className="flex flex-col gap-2 px-4 py-2">
            <p>Integramos um sistema para vendas online, onde o cliente adiciona os itens ao carrinho de compras e ao finalizar o pedido será enviado via Whatsapp.</p>
            <Button name="Visitar Projeto" href="https://flashlanches.vercel.app/" cor="bg-[#4ec963] text-black font-semibold"/>
          </div>
        </div>

        
      </div>    
        
    </div>
    )
}