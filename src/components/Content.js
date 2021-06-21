import React, { Component } from 'react';
import CreatContent from './CreatContent';
import Head from './Head';
import SgkTurList from './lists/SgkTurList';
import DigerTurList from './lists/DigerTurList';
import KulturTurList from './lists/KulturTurList';
import KisTurList from './lists/KisTurList';
import EglenceTurList from './lists/EglenceTurList';
import Home from './Home';
import Contact from './Contact';
import About from './About';

export class Content extends Component {
	// State atanması ve click fonk. bağlama yeri
	constructor() {
		super();
		this.state = {
			hasChanged: false,
			counterOfSgk: 0,
			counterOfKultur: 0,
			counterOfKis: 0,
			counterOfEglence: 0,
			counterOfDiger: 0,
			mainContent: <Home />
		};
		this.sgk_tur_click = this.sgk_tur_click.bind(this); 
		this.kultur_tur_click = this.kultur_tur_click.bind(this);
		this.kis_tur_click = this.kis_tur_click.bind(this);
		this.eglence_tur_click = this.eglence_tur_click.bind(this);
		this.diger_tur_click = this.diger_tur_click.bind(this);
	}
// mainContent = ana sayfa
	homePage = () => {
		this.setState(() => {
			return {
				hasChanged: true
			};
		});
		this.state.mainContent = Home();
	};
	// mainContent = hakkımızda
	about = () => {
		this.setState(() => {
			return {
				hasChanged: true
			};
		});
		this.state.mainContent = About();
	};
	// mainContent = iletişim
	contact = () => {
		this.setState(() => {
			return {
				hasChanged: true
			};
		});
		this.state.mainContent = Contact();
	};
// gelen parametreye göre counterlerden bir tanesini (1) arttırmak (counterOfSgk, counterOfDiger vs.....)         -->
	increment = (ktgr) => {
		switch (ktgr) {
			case 'Saglik':
				if (this.state.counterOfSgk < SgkTurList().length - 1) {
					this.setState((praveState) => {
						return {
							counterOfSgk: praveState.counterOfSgk + 1
						};
					});
					
	
				}
				break;
			case 'Kultur':
				if (this.state.counterOfKultur < KulturTurList().length - 1) {
					this.setState((praveState) => {
						return {
							counterOfKultur: praveState.counterOfKultur + 1
						};
					});
				}
				break;

			case 'Kis':
				if (this.state.counterOfKis < KisTurList().length - 1) {
					this.setState((praveState) => {
						return {
							counterOfKis: praveState.counterOfKis + 1
						};
					});
				}
				break;
			case 'Eglence':
				if (this.state.counterOfEglence < EglenceTurList().length - 1) {
					this.setState((praveState) => {
						return {
							counterOfEglence: praveState.counterOfEglence + 1
						};
					});
				}
				break;
			case 'Diger':
				if (this.state.counterOfDiger < DigerTurList().length - 1) {
					this.setState((praveState) => {
						return {
							counterOfDiger: praveState.counterOfDiger + 1
						};
					});
				}
				break;
		}

	};
	// gelen parametreye göre counterlerden bir tanesini (1) azaltmak (counterOfSgk, counterOfDiger vs.....)         <--
	reduce = (ktgr) => {
		switch (ktgr) {
			case 'Saglik':
				if (this.state.counterOfSgk !== 0) {
					console.log('mer sg');
					this.setState((praveState) => {
						return {
							counterOfSgk: praveState.counterOfSgk - 1
						};
					});
				}
				break;
			case 'Kultur':
				if (this.state.counterOfKultur !== 0) {
					console.log('mer ku');
					this.setState((praveState) => {
						return {
							counterOfKultur: praveState.counterOfKultur - 1
						};
					});
				}
				break;

			case 'Kis':
				if (this.state.counterOfKis !== 0) {
					this.setState((praveState) => {
						console.log('mer ki');
						return {
							counterOfKis: praveState.counterOfKis - 1
						};
					});
				}
				break;
			case 'Eglence':
				if (this.state.counterOfEglence !== 0) {
					this.setState((praveState) => {
						return {
							counterOfEglence: praveState.counterOfEglence - 1
						};
					});
				}
				break;
			case 'Diger':
				if (this.state.counterOfDiger !== 0) {
					this.setState((praveState) => {
						return {
							counterOfDiger: praveState.counterOfDiger - 1
						};
					});
				}
				break;
			default:
				this.setState(() => {
					return {
						counterOfSgk: 0,
						counterOfKultur: 0,
						counterOfKis: 0,
						counterOfEglence: 0,
						counterOfDiger: 0
					};
				});
		}
	};

	// counter değerini baz alarak index olarak listelere verilmesi ve maptan geçirilerek creatContent dosyasına props atama işlemidir

	sgk_tur_click() {
		this.viwedList = [ SgkTurList()[this.state.counterOfSgk] ].map((tur, index) => (
			<CreatContent
				key={index}
				turName={tur.name}
				img={tur.img}
				country={tur.country}
				description={tur.description}
				theState={tur.theState}
				kategori={tur.kategori}
				increment={this.increment}
				reduce={this.reduce}
			/>
		));

		this.setState(() => {
			return {
				mainContent: this.viwedList ,
				hasChanged: true
			
			};
		});
	}

//***************************************************************** */

	kultur_tur_click() {

		this.viwedList = [ KulturTurList()[this.state.counterOfKultur] ].map((tur) => (
			<CreatContent
				key={tur.id}
				turName={tur.name}
				img={tur.img}
				country={tur.country}
				description={tur.description}
				theState={tur.theState}
				kategori={tur.kategori}
				increment={this.increment}
				reduce={this.reduce}
			/>
		));

		this.setState(() => {
			return {
				mainContent: this.viwedList
			};
		});
	}
	//***************************************************************** */
	kis_tur_click() {


		this.viwedList = [ KisTurList()[this.state.counterOfKis] ].map((tur) => (
			<CreatContent
				key={tur.id}
				turName={tur.name}
				img={tur.img}
				country={tur.country}
				description={tur.description}
				theState={tur.theState}
				kategori={tur.kategori}
				increment={this.increment}
				reduce={this.reduce}
			/>
		));
		this.setState(() => {
			return {
				mainContent: this.viwedList
			};
		});
	}
//***************************************************************** */
	eglence_tur_click() {


		this.viwedList = [ EglenceTurList()[this.state.counterOfEglence] ].map((tur) => (
			<CreatContent
				key={tur.id}
				turName={tur.name}
				img={tur.img}
				country={tur.country}
				description={tur.description}
				theState={tur.theState}
				kategori={tur.kategori}
				increment={this.increment}
				reduce={this.reduce}
			/>
			
		));
		this.setState(() => {
			return {
				mainContent: this.viwedList
			};
		});
	}
//***************************************************************** */
	diger_tur_click() {
		this.setState(() => {
			return {
				hasChanged: true
			};
		});

		this.viwedList = [ DigerTurList()[this.state.counterOfDiger] ].map((tur) => (
			<CreatContent
				key={tur.id}
				turName={tur.name}
				img={tur.img}
				country={tur.country}
				description={tur.description}
				theState={tur.theState}
				kategori={tur.kategori}
				increment={this.increment}
				reduce={this.reduce}
			/>
		));
		this.setState(() => {
			return {
				mainContent: this.viwedList
			};
		});
	}

	render() {
		return (
			<div className="raw ">
				<Head homePage={this.homePage} contact={this.contact} about={this.about} />
				<ul className="nav justify-content-center bg-info btn-group rounded">
					<a className="text-white btn btn-info" onClick={this.sgk_tur_click}>
						<li>
							<b>Sağlık Turları {this.state.counterOfSgk}</b>
						</li>
					</a>

					<a className="text-white btn btn-info" onClick={this.kultur_tur_click}>
						<li>
							<b>Kültür Turları {this.state.counterOfKultur}</b>
						</li>
					</a>

					<a className="text-white btn btn-info" onClick={this.kis_tur_click}>
						<li>
							<b>Kış Turları {this.state.counterOfKis}</b>
						</li>
					</a>

					<a className="text-white btn btn-info" onClick={this.eglence_tur_click}>
						<li>
							{' '}
							<b>Eğlence Turları {this.state.counterOfEglence}</b>
						</li>
					</a>

					<a className="text-white btn btn-info" onClick={this.diger_tur_click}>
						<li>
							<b>Diğer Turlar {this.state.counterOfDiger + 1} / {DigerTurList().length}</b>
						</li>
					</a>
				</ul>
				{this.state.mainContent}
			</div>
		);
	}
}
export default Content;