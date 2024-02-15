"use client"

import AgentBanner from "@/components/Agents/AgentBanner";

export default function Agentes() {
    return( 
    <div className="w-full px-2">
       <AgentBanner agentImage={'/Phoenix.png'}
        name={'PHOENIX'} 
        agentType={'Duelista'} 
        agentTypeIcon={'/Funcao/Duelista.png'} />
    </div>)
}