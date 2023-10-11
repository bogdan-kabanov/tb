import { LogotypeProps } from '@/types/ComponentTypes'

function Logotype(props: LogotypeProps) {
    return (
        <img className="Logotype" src={props.url} alt={props.alt} />
    )
}

export default Logotype