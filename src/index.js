import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import DaftarBerita from './pages/DaftarBerita.jsx';
import BeritaDetail from './pages/BeritaDetail.jsx';
import VisiMisi from './pages/VisiMisi.jsx';
import TugasFungsi from './pages/TugasFungsi.jsx';
import Struktur from './pages/Struktur.jsx';
import Profil from './pages/Profil.jsx';
import StrukturOrganisasi from './pages/StrukturOrganisasi.jsx';
import MOTS from './pages/MOTS.jsx';
import IAR from './pages/IAR.jsx';
import ISR from './pages/ISR.jsx';
import REOR from './pages/REOR.jsx';
import SFRSOR from './pages/SFRSOR.jsx';
import Contact from './pages/Contact';
import Artikel from './pages/BeritaDetail.jsx';
import GaleriFoto from './pages/GaleriFoto.jsx';
import GaleriVideo from './pages/GaleriVideo.jsx';
import DaftarInstagram from './pages/DaftarInstagram.jsx';
import InstagramDetail from './pages/InstagramDetail.jsx';
import Layout from './components/Layout.jsx';
import AdminPrivateRoute from './AdminPrivateRoute.jsx';
import CMSNews from './pages/CMSNews.jsx';
import WBS from './pages/wbs.jsx';
import LaporSp4n from './pages/sp4n.jsx';
import GangguanFrekuensi from './pages/GangguanFrekuensi.jsx';
import Login from './pages/Login.jsx';
import CMSHome from './cms/home';
import BeritasTable from './cms/beritas';
import CreateBerita from './cms/beritas/create';
import UpdateBerita from './cms/beritas/update';
import ProfilesTable from './cms/profile';
import CreateProfile from './cms/profile/create';
import UpdateProfile from './cms/profile/update';
import InstagramTable from './cms/instagram';
import CreateInstagram from './cms/instagram/create';
import UpdateInstagram from './cms/instagram/update';
import StrukturTable from './cms/strukturs/index.jsx';
import CreateStrukturPengurus from './cms/strukturs/create.jsx';
import UpdateStrukturPengurus from './cms/strukturs/update.jsx';
import GaleriVideoTable from './cms/videos/index.jsx';
import CreateGaleriVideo from './cms/videos/create.jsx';
import UpdateGaleriVideo from './cms/videos/update.jsx';
import GaleriFotoTable from './cms/foto/index.jsx';
import CreateGaleriFoto from './cms/foto/create.jsx';
import UpdateGaleriFoto from './cms/foto/update.jsx';
import IARTable from './cms/iar/index.jsx';
import { AuthProvider } from './AuthContext.js';


ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/admin" element={<AdminPrivateRoute component={CMSHome}/>} />
            <Route path="/admin/berita" element={<AdminPrivateRoute component={BeritasTable}/>} />
            <Route path="/admin/berita/create" element={<AdminPrivateRoute component={CreateBerita}/>} />
            <Route path="/admin/berita/edit/:id" element={<AdminPrivateRoute component={UpdateBerita}/>} />
            <Route path="/admin/profile" element={<AdminPrivateRoute component={ProfilesTable}/>} />
            <Route path="/admin/profile/create" element={<AdminPrivateRoute component={CreateProfile}/>} />
            <Route path="/admin/profile/edit/:id" element={<AdminPrivateRoute component={UpdateProfile}/>} />
            <Route path="/admin/instagram" element={<AdminPrivateRoute component={InstagramTable}/>} />
            <Route path="/admin/instagram/create" element={<AdminPrivateRoute component={CreateInstagram}/>} />
            <Route path="/admin/instagram/edit/:id" element={<AdminPrivateRoute component={UpdateInstagram}/>} />
            <Route path="/admin/galeri-videos" element={<AdminPrivateRoute component={GaleriVideoTable}/>} />
            <Route path="/admin/galeri-videos/create" element={<AdminPrivateRoute component={CreateGaleriVideo}/>} />
            <Route path="/admin/galeri-videos/update" element={<AdminPrivateRoute component={UpdateGaleriVideo}/>} />
            <Route path="/admin/galeri-foto" element={<AdminPrivateRoute component={GaleriFotoTable}/>} />
            <Route path="/admin/galeri-foto/create" element={<AdminPrivateRoute component={CreateGaleriFoto}/>} />
            <Route path="/admin/galeri-foto/update" element={<AdminPrivateRoute component={UpdateGaleriFoto}/>} />
            <Route path="/admin/struktur" element={<AdminPrivateRoute component={StrukturTable}/>} />
            <Route path="/admin/struktur/create" element={<AdminPrivateRoute component={CreateStrukturPengurus}/>} />
            <Route path="/admin/struktur/update" element={<AdminPrivateRoute component={UpdateStrukturPengurus}/>} />
            <Route path="/admin/iar" element={<AdminPrivateRoute component={IARTable}/>} />

            <Route path="/" element={<App />} />
            <Route path="/berita" element={<DaftarBerita />} />
            <Route path="/berita/:id" element={<BeritaDetail />} />
            <Route path="/visimisi" element={<VisiMisi />} />
            <Route path="/tugasfungsi" element={<TugasFungsi />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/struktur-pengurus" element={<Struktur />} />
            <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
            <Route path="/mots" element={<MOTS />} />
            <Route path="/gangguan-frekuensi" element={<GangguanFrekuensi />} />
            <Route path="/wbs" element={<WBS />} />
            <Route path="/sp4n" element={<LaporSp4n />} />
            <Route path="/iar" element={<IAR />} />
            <Route path="/isr" element={<ISR />} />
            <Route path="/reor" element={<REOR />} />
            <Route path="/sfrsor" element={<SFRSOR />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/galeri-foto" element={<GaleriFoto />} />
            <Route path="/galeri-video" element={<GaleriVideo />} />
            <Route path="/instagram" element={<DaftarInstagram />} />
            <Route path="/instagram/:id" element={<InstagramDetail />} />
            <Route path="/cms-news" element={<CMSNews />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>

);
