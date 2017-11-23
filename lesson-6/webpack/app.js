import sayHello from './hello'
import './styles.css'
import logo from './logo.png'

document.getElementById('name').innerText = sayHello('Jan')
document.getElementById('logo').src = logo