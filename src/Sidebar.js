import './App.css';
import Logo from './img/logo.png';
import Profile from './img/pp.jpg';
import Dashboard from './img/home.png';
import Transaksi from './img/dashboard.png';
import Updown from './img/updown.png';
import Uang from './img/uang.png';
import Stats from './img/stats.png';
import Konsumen from './img/smile.png';
import Daftar from './img/list.png';
import Exit from './img/exit.png';
import More from './img/more-menu-horizontal.png';
import Sidebararrowdown from './img/sidebar-arrowdown.png'

export default function Sidebar() {
    return(
        <div className='side'>
            <div className='warp'>
                <img src={Logo} alt='logo'></img>
            </div>
            <hr></hr>
            <div className='warp-pp'>
                <img src={Profile} alt='logo'></img>
                <h2>Real Wash Wish</h2>
            </div>
            <hr></hr>
            <div className='warp-main'>
                <div className='main'>
                    <img src={Dashboard} alt='dashboard'></img>
                    <p>Dashboard</p>
                </div>
                <div className='main'>
                    <img src={Transaksi} alt='transaksi'></img>
                    <p style={{width: "100%"}}>Transaksi</p>
                    <p className='seventeen'>17</p>
                    <img src={Updown} alt='updown' style={{width: "11.67px"}}></img>
                </div>
                {/* dropdown menu */}
                <div className='drop'>
                    <div className='main'>
                        <p>Buat Transaksi</p>
                    </div>
                    <div className='main'>
                        <p>Proses Order</p>
                    </div>
                    <div className='main'>
                        <p>Ambil & Lunasi</p>
                    </div>
                    <div className='main'>
                        <p>Rekap Transaksi</p>
                    </div>
                    <div className='main'>
                        <p>Top Up Deposit</p>
                    </div>
                </div>
                <div className='main'>
                    <img src={Uang} alt='uang'></img>
                    <p style={{width: "100%"}}>Keuangan</p>
                    <img src={Sidebararrowdown} alt='sidebar' style={{width: "11.67px", marginTop: "3px"}}></img>
                </div>
                <div className='main'>
                    <img src={Stats} alt='laporan'></img>
                    <p>Laporan</p>
                </div> 
                <div className='main'>
                    <img src={Konsumen} alt='konsumen'></img>
                    <p>Konsumen</p>
                </div>   
                <div className='main daftar'>
                    <img src={Daftar} alt='layanan'></img>
                    <p>Daftar Layanan</p>
                </div>
                <div className='main daftar'>
                    <img src={More} alt='lainnya'></img>
                    <p style={{width: "100%"}}>Lainnya</p>
                    <img src={Sidebararrowdown} alt='sidebar' style={{width: "11.67px", marginTop: "3px"}}></img>
                </div>
                <div className='main' style={{marginTop: "80vh"}}>
                    <img src={Exit} alt='keluar'></img>
                    <p className='exit'>Keluar</p>
                </div> 
            </div>
        </div>
    );
}