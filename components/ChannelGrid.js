// import Link from 'next/link'

import { Link } from '../routes'
import slug from '../helpers/slug'

export default class ChannelGrid extends React.Component{
  render(){
    
    const { channels } = this.props
    const params = {
      slug: slug(channel.title),
      id: channel.id
    }

    return(
      <div className="channels">
        {
          channels.map( (channel)=>(
            <Link 
              route="channel"
              params={params}
              prefetch 
              key={channel.id}>

              <div className="linker">
                <a className="channel">
                  <img src={ channel.urls.logo_image.original } alt=""/>
                </a>
                <h2>{ channel.title }</h2>
              </div>

            </Link>
          ))
        }
        <style jsx>{`
          .channels{
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr) );
          }
          .linker{
            cursor: pointer;
          }
          .channel {
            display:block;
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
            margin-bottom: 0.5em;
            height:197px;
            overflow:hidden;
          }
          .channel img {
            width: 197px;
            height: 197px;

          }
          h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight:600;
            margin:0;
            text-align: center;
          }
        `}
        </style>
      </div>
    )
  }
}