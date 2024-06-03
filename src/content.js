import Transaksi from './img/Transaksi.png';
import Proses from './img/ProsesTransaksi.png';
import Pelunasan from './img/AmbilPelunasan.png';
import Rekap from './img/RekapTransaksi.png';
import Arleft from './img/arrowright.png';
import Wallet from './img/wallet-3.png';
import Topup from './img/card-add.png';
import Riwayat from './img/refresh-left-square.png';
import Leftarr from './img/leftarrow.png';
import Rightarr from './img/rightarrow.png';
import Upp from './img/upwardsarr.png';
import Down from './img/downwardsarr.png'
import React from 'react'
import './Content.css';
import SplineAreaChart from './ApexChartComponent.js';
import SplineAreaTwo from './ChartTwo.js';
import BarChart from './ChartBar.js';

export default function Content(){
    return(
        <div className='layout'>
            <div className="ct-first">
                <div className="menu">
                    <p>Menu Utama</p>
                    <div className="menu-icon">
                        <div className="menu-box">
                            <img src={Transaksi} alt='transaksi'></img>
                            <p>Buat <br></br>Transaksi</p>
                        </div>
                        <div className="menu-box">
                            <img src={Proses} alt='proses order'></img>
                            <p>Proses <br></br>Order</p>
                        </div>
                        <div className="menu-box">
                            <img src={Pelunasan} alt='pelunasan'></img>
                            <p>Pelunasan & Pengambilan</p>
                        </div>
                        <div className="menu-box">
                            <img src={Rekap} alt='rekap'></img>
                            <p>Rekap <br></br>Transaksi</p>
                        </div>
                    </div>
                </div>
                <div className='todo'>
                    <p>To Do List</p>
                    <div className='todo-icon'>
                        <div className='todo-box'>
                            <div className='inner'>
                                <div className='line'></div>
                                <div className='menus'>
                                    <div className='top'>
                                        <p>17</p>
                                        <img src={Arleft} alt='arrow left'></img>
                                    </div>
                                    <p>Order</p>
                                </div>
                            </div>
                        </div>
                        <div className='todo-box'>
                            <div className='inner'>
                                <div className='line'></div>
                                <div className='menus'>
                                    <div className='top'>
                                        <p>4</p>
                                        <img src={Arleft} alt='arrow left'></img>
                                    </div>
                                    <p>Terlambat</p>
                                </div>
                            </div>
                        </div><div className='todo-box'>
                            <div className='inner'>
                                <div className='line'></div>
                                <div className='menus'>
                                    <div className='top'>
                                        <p>7</p>
                                        <img src={Arleft} alt='arrow left'></img>
                                    </div>
                                    <p>Pengantaran</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ct-second'>
                <div className='coin'>
                    <div className='coin-wrap'>
                        <div className='top'>
                            <p>Coin</p>
                            <p>QRIS</p>
                            <p>Kas Laci</p>
                        </div>
                        <div className='bottom'>
                            <div className='left'>
                                <img src={Wallet} alt='wallet'></img>
                                <p>Rp 50.000.000.000</p>
                            </div>
                            <div className='right'>
                                <div className='right-layout'>
                                    <img src={Topup} alt='topup'></img>
                                    <p>Top Up</p>
                                </div>
                                <div className='right-layout'>
                                    <img src={Riwayat} alt='riwayat'></img>
                                    <p>Riwayat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='banner'>
                    <div>
                        <img src={Leftarr} alt='left arrow'></img>
                    </div>
                    <div>
                        <img src={Rightarr} alt='right arror'></img>
                    </div>
                </div>
            </div>
            <div className='ct-third'>
                <div className='laporan'>
                    <div className='title'>
                        <p>Laporan Keuangan</p>
                        <p>Hari Ini</p>
                    </div>
                    <div className='data'>
                        <div className='data-box'>
                            <div className='data-box-top'>
                                <div className='percent'>
                                    <img src={Upp} alt='uparrow'></img>
                                    <p>99%</p>
                                </div>
                                <div className='data-title-main'>
                                    <p>Total Pendapatan</p>
                                    <p>Rp 350.000</p>
                                </div>
                                <div className='line-bottom'></div>
                            </div>
                            <div className='box-separator'>
                                <div className='separator'></div>
                            </div>
                            <div className='data-box-top'>
                                <div className='percent'>
                                    <img src={Down} alt='uparrow'></img>
                                    <p>20%</p>
                                </div>
                                <div className='data-title-main'>
                                    <p>Total Pengeluaran</p>
                                    <p>Rp 275.500</p>
                                </div>
                                <div className='line-bottom'></div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <SplineAreaChart/>
                    <div className='days'>
                        <p>Minggu</p>
                        <p>Senin</p>
                        <p>Selasa</p>
                        <p>Rabu</p>
                        <p>Kamis</p>
                        <p>Jumat</p>
                        <p>Sabtu</p>
                    </div>
                </div>
                <div className='uang'>
                    <div className='title'>
                        <div className='title-top'>
                            <p>Total Uang Diterima</p>
                            <p>23 Sep - 29 Sep 2023</p>
                        </div>
                        <div className='amount'>
                            <p>Rp 570.000,23</p>
                        </div>
                    </div>
                    <hr></hr>
                    <SplineAreaTwo/>
                    <div className='date'>
                        <p>23</p>
                        <p>24</p>
                        <p>25</p>
                        <p>26</p>
                        <p>27</p>
                        <p>28</p>
                        <p>29</p>
                    </div>
                    <div className='legend'>
                        <div className='cash'>
                            <div className='square'></div>
                            <p>Cash</p>
                        </div>
                        <div className='bank'>
                            <div className='square'></div>
                            <p>Bank</p>
                        </div>
                        <div className='paylink'>
                            <div className='square'></div>
                            <p>Paylink</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ct-fourth'>
                <div className='laporan'>
                    <div className='title'>
                        <p>Kunjungan Konsumen</p>
                        <p>Hari Ini</p>
                    </div>
                    <div className='data'>
                        <div className='data-box'>
                            <div className='data-box-top'>
                                <div className='percent'>
                                    <img src={Upp} alt='uparrow'></img>
                                    <p>99%</p>
                                </div>
                                <div className='data-title-main'>
                                    <p>Konsumen Baru</p>
                                    <p>100</p>
                                </div>
                                <div className='line-bottom'></div>
                            </div>
                            <div className='box-separator'>
                                <div className='separator'></div>
                            </div>
                            <div className='data-box-top'>
                                <div className='percent'>
                                    <img src={Down} alt='uparrow'></img>
                                    <p>20%</p>
                                </div>
                                <div className='data-title-main'>
                                    <p>Konsumen Lama</p>
                                    <p>90</p>
                                </div>
                                <div className='line-bottom'></div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <BarChart/>
                    <div className='days'>
                        <p>Minggu</p>
                        <p>Senin</p>
                        <p>Selasa</p>
                        <p>Rabu</p>
                        <p>Kamis</p>
                        <p>Jumat</p>
                        <p>Sabtu</p>
                    </div>
                </div>                
            </div>
        </div>
    );
}


