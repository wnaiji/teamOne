import './App.css'
import './index.css'
import App from './App.jsx'
import Header from './layout/Header.jsx'
import Formulaire from './Formulaire/Formulaire.jsx'
import ContactPage from './Components/Contact.jsx'
import Homepage from './Components/Homepage.jsx'
import Storypage from './Components/Quizzpage.jsx'


<Routes>
    <Route path="/" element={<App/>}/>
    <Route path="./Components/homepage" element={<Homepage/>}/>
    <Route path="./layout/header" element={<Header/>}/>
    <Route path="./Components/quizpage" element={<Storypage/>}/>
    <Route path="./Formulaire/formulaire." element={<Formulaire/>}/>
    <Route path="./Components/contact" element={<ContactPage/>}/>
</Routes>