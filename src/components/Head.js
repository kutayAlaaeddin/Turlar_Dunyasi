import React from 'react';
import Content from './Content';
import MainContent from './MainContent';
function Head() {
	return (
		<div className="the-head navbar bg-dark text-white rounded">
			<h1>Turlar Dünyası</h1>
			<ul class="nav nav-pills head-links">
				<li class="nav-item">
					<a class="nav-link border border-light"  href="#" >
						Ana Sayfa
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link border border-light" href="#">
						Hakkımızda
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link border border-light" href="#">
						İletişim
					</a>
				</li>
			</ul>
			<div className="lang">
				<ul>
					<li>
						<a className="text-white" href="#">
							العربية
						</a>
					</li>

					<li>
						|<a className="text-white" href="#">
							Türkçe
						</a>|
					</li>

					<li>
						<a className="text-white" href="#">English</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default Head;
