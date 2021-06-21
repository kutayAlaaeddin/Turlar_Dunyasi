import React from 'react';

function Home() {
	return (
		<div className="card padding bg-info text-white rounded">
			<div className="card-body">
				<p className="card-text">
					Burası <strong> Ana sayfa</strong> bölümüdür.. buradan son eklenen aktiviteler, duyurular vb. şeyler
					paylaşılabilir.
				</p>
			</div>
			<ul className="list-group list-group-flush">
	
				<li className="list-group-item bg-secondary"> Bu alana Premium üyelikler için özel bir galeri yapılacaktır..</li>

			</ul>
			<div className="card-body">
				<a href="#" className="btn btn-light text-info">
					Şirket sahibiyim
				</a>
				<a href="#" className ="card-link btn btn-light text-info text-center">
					Müşteriyim
				</a> 
				
				<a href="#" className="card-link btn btn-light text-info text-center">
					Öneri / Şikayet
				</a> 	

			</div>
		</div>
	);
}
export default Home;
