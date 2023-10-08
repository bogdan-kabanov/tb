import "./SiteName.scss"
import { SiteNameProps } from '../../../types/ComponentTypes'

function SiteName(props: SiteNameProps) {
    return (
        <span className="SiteName">{props.sitename}</span>
    )
}

export default SiteName