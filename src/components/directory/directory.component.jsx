import React,{Component} from 'react';
//it is higher order component that takes component as argument and produces modified component
 

import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component'

//we need a class component as we need to store the state of 
//the menuitems that we want to pass

class Directory extends Component{
    constructor(){
        super();

        this.state={
             sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {     //title,imageUrl,id, size, linkUrl-> otherSectionProps
                    this.state.sections.map(({id, ...otherSectionProps})=>(
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}
export default Directory; 