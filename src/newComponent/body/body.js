import React  , {useState} from 'react'
import { Link } from 'react-router-dom'
import InputName from '../Form/form'
import Happy from '../../newComponent/happy'
import { Router, Route } from 'react-router-dom'
import Header from '../../components/header';
import JsonData from '../../data/data.json';
import Carousel from '../../newComponent/carousel/carousel'

const Body = () => {
const [state, setstate] = useState({
    landingPageData: {},
})

    return (<div>

<div style={{ marginTop: '100px' }}>

<Route path="/" exact component={Carousel}  />
<Route path="/inputname" exact component={InputName} />
<Route path="/happy/:fullname" component={Happy} />

</div>

    </div>)

}

export default Body