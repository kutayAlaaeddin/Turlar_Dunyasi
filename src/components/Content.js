import React, { Component } from 'react';
import CreatContent from './CreatContent';
import SgkTurList from './lists/SgkTurList';
import DigerTurList from './lists/DigerTurList';
import KulturTurList from './lists/KulturTurList';
import KisTurList from './lists/KisTurList';
import EglenceTurList from './lists/EglenceTurList';
import MainContent from './MainContent';

export class Content extends Component {
	constructor() {
		super();
		this.state = {
			Counter: 0,
			list: [],
			mainContent: <MainContent />
		};
		this.sgk_tur_click = this.sgk_tur_click.bind(this); // click metodunu bağlamak için
		this.kultur_tur_click = this.kultur_tur_click.bind(this);
		this.kis_tur_click = this.kis_tur_click.bind(this);
		this.eglence_tur_click = this.eglence_tur_click.bind(this);
		this.diger_tur_click = this.diger_tur_click.bind(this);

	}
home_page_click(){
	this.state.mainContent = this.viwedList;
}
	// Sağlık turlarından ilk elelman gösterme işlemi

	sgk_tur_click() {
		this.setState((praveState) => {
			return {
				List: SgkTurList
			};
		});

		this.viwedList = [ SgkTurList()[0] ].map((tur) => (
			<CreatContent
				counter={tur.id}
				turName={tur.name}
				img={tur.img}
				country={tur.country}
				description={tur.description}
				theState={tur.theState}
				kategori={tur.kategori}
			/>
		));
		this.state.mainContent = this.viwedList;
	}
	// Kültür turlarından ilk elelman gösterme işlemi

	kultur_tur_click() {
		this.setState((praveState) => {
			return {
				List: KulturTurList
			};
		});

		this.viwedList = [ KulturTurList()[0] ].map((tur) => (
			<CreatContent
				counter={tur.id}
				turName={tur.name}
				img={tur.img}
				country={tur.country}
				description={tur.description}
				theState={tur.theState}
				kategori={tur.kategori}
			/>
		));
		this.state.mainContent = this.viwedList;
	}
	// Kış turlarından ilk elelman gösterme işlemi
	kis_tur_click() {
		// bu kod parçacığı sadece ekranda değişklik yapmamıza izin veriyor (state ulaştığı için)
		this.setState((praveState) => {
			return {
				List: KulturTurList
			};
		});

		this.viwedList = [ KisTurList()[this.state.Counter] ].map((tur) => (
			<CreatContent
				counter={tur.id}
				turName={tur.name}
				img={tur.img}
				country={tur.country}
				description={tur.description}
				theState={tur.theState}
				kategori={tur.kategori}
			/>
		));
		this.state.mainContent = this.viwedList;
	}
	// Eğlence turlarından ilk elelman gösterme işlemi
	eglence_tur_click() {
		this.setState((praveState) => {
			return {
				List: KulturTurList
			};
		});

		this.viwedList = [ EglenceTurList()[0] ].map((tur) => (
			<CreatContent
				counter={tur.id}
				turName={tur.name}
				img={tur.img}
				country={tur.country}
				description={tur.description}
				theState={tur.theState}
				kategori={tur.kategori}
			/>
		));
		this.state.mainContent = this.viwedList;
	}
	// Diğer turlarından ilk elelman gösterme işlemi
	diger_tur_click() {
		this.setState((praveState) => {
			return {
				List: KulturTurList
			};
		});

		this.viwedList = [ DigerTurList()[0] ].map((tur) => (
			<CreatContent
				turName={tur.name}
				img={tur.img}
				country={tur.country}
				description={tur.description}
				theState={tur.theState}
				kategori={tur.kategori}
			/>
		));
		this.state.mainContent = this.viwedList;
	}



	render() {
		var theContent = this.state.mainContent;

		return (
			<div className="raw ">
				<ul className="nav justify-content-center bg-info btn-group rounded">
					<a className="text-white btn btn-info" onClick={this.sgk_tur_click}>
						<li>
							<b>Sağlık Turları</b>
						</li>
					</a>

					<a className="text-white btn btn-info" onClick={this.kultur_tur_click}>
						<li>
							<b>Kültür Turları</b>
						</li>
					</a>

					<a className="text-white btn btn-info" onClick={this.kis_tur_click}>
						<li>
							<b>Kış Turları</b>
						</li>
					</a>

					<a className="text-white btn btn-info" onClick={this.eglence_tur_click}>
						<li>
							{' '}
							<b>Eğlence Turları</b>
						</li>
					</a>

					<a className="text-white btn btn-info" onClick={this.diger_tur_click}>
						<li>
							<b>Diğer Turlar</b>
						</li>
					</a>
				</ul>
				{theContent}
			</div>
		);
	}
}
export default Content;

/*	click() {
		if (this.state.counter < this.state.myList.length) {
			this.state.myNewList.push(this.state.myList[this.state.counter]);

			this.setState((prevState) => {
				return {
					counter: prevState.counter + 1
				};
			});
			this.viwedList = this.state.myNewList.map((tur) => (
				<CreatContent
					turName={tur.name}
					img={tur.img}
					country={tur.country}
					description={tur.description}
					theState={tur.theState}
				/>
			));
		} else {
			this.setState((prevState) => {
				return {
					durum: false
				};
			});
			return this.state.durum;
		}
	}*/
// sayac_plus_1() {
// 	this.setState((praveState) => {
// 		return {
// 			Counter: praveState.Counter + 1
// 		};
// 	});
// 	return this.state.Counter;
// }
