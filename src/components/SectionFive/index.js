import icon1 from "../../images/advantages/icon1.png"
import icon2 from "../../images/advantages/icon2.png"
import icon3 from "../../images/advantages/icon3.png"
import icon4 from "../../images/advantages/icon4.png"
import './SectionFive.css'

function SectionFive() {
    return (
        <section className='Section-Five'>
            <div className='Section-Five-Title'>
                <h4 className='Title-One-Advantages'>Our</h4>
                <h3 className='Title-Two-Advantages'>advantages</h3>
            </div>
            <div>
                <ul>
                    <li className="Advantage">
                        <div>
                            <img src={icon1} alt="icon1"></img>
                        </div>
                        <div>
                            <h5>UI/UX yang Ramah Pengguna</h5>
                            <p>App dan situs web Anda memiliki analogi yang sama. Pelanggan tidak akan mengunjungi toko Anda dan melihatnya buruk, dan akan langsung pergi meninggalkan website tersebut. Moto kami adalah: <strong>"Membuat Situs Web yang Ramah Pengguna"</strong> yang memudahkan pelanggan untuk bernavigasi.</p>
                        </div>
                        
                    </li>
                    <li className="Advantage">
                        <div>
                            <img src={icon2} alt="icon2"></img>
                        </div>
                        <div>
                            <h5>Menangani Pemrograman yang Sulit</h5>
                            <p>Kamu amu situs web Wordpress atau PHP? Kami bisa menangani keduanya. Programmer kami profesional yang sangat terampil, Bersertifikasi lembaga profesional. Bahkan dengan fungsi yang sulit atau sistem yang besar, kami siap untuk menantang diri sendiri. Untuk setiap permintaan pelanggan, kami selalu mencari solusi untuk mewujudkan hasil dan mengusulkan ide daripada mencari alasan mengapa kami tidak bisa melakukannya.</p>
                        </div>                        
                    </li>
                    <li className="Advantage">
                        <div>
                            <img src={icon3} alt="icon3"></img>
                        </div>
                        <div>
                            <h5>Berorientasi Hasil</h5>
                            <p>Salah satu moto kami adalah 'Buat situs web yang berkontribusi pada hasil bisnis Anda'. Kami tidak hanya membuat website, kami memiliki prinsip bahwa setiap Website yang dibuat akan memberikan kontribusi untuk bisnis Anda. Kami berkomitmen untuk membantu bisnis Anda berkembang dan berkembang.</p>
                        </div>                        
                    </li>
                    <li className="Advantage">
                        <div>
                        <img src={icon4} alt="icon4"></img>
                        </div>
                        <div>
                            <h5>Layanan Pelanggan Profesional</h5>
                            <p>Tim kami selalu merespon dengan cepat dan tulus kepada pelanggan dengan jawaban yang benar, berdasarkan pengetahuan luas mereka yang dikoordinasikan dengan manajemen, desainer, dan pemrogram. Jika Anda memiliki masalah dengan dukungan pelanggan kami, harap segera hubungi kami. Kami bertujuan untuk menjadi mitra yang baik yang menghilangkan stres dan membantu bisnis Anda</p>
                        </div>
                    </li>
                </ul>
            </div>           
        </section>
    )
}

export default SectionFive
