import React, { Component } from 'react';
export class Head extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasChanged: false
		};
	}
	homePage = () => {
		this.setState(()=>{
			return{
				hasChanged: true,
			}
		})
		this.props.homePage();
	};
	render() {
		return (
			<div className="the-head navbar bg-dark text-white rounded">
				<h1>Turlar Dünyası</h1>
				<ul className="nav nav-pills head-links">
					<li className="nav-item">
						<a className="nav-link border border-light" href="#"  onClick= {this.props.homePage}>
							Ana Sayfa  {this.props.name}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link border border-light" href="#" onClick={this.props.about}>
							Hakkımızda
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link border border-light" href="#" onClick={this.props.contact}>
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
							<a className="text-white" href="#">
								English
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
export default Head;
