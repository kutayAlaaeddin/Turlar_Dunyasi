import React, { Component } from 'react';

class CreatContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasChangedPls: false,
			hasChangedM: false
		};
	}
	reduce = () => {
		this.setState(() => {
			return {
				hasChangedM: true
			};
		});
		this.props.reduce(this.props.kategori);
	};

	increment = () => {
		this.setState(() => {
			return {
				hasChangedPls: true
			};
		});
		this.props.increment(this.props.kategori);
	};

	render() {
		return (
			<div className="slayd">
				<a href="#">
					{' '}
					<i className="fas fa-chevron-left prev" onClick={this.reduce} />
				</a>

				<div className="card hieght">
					<div className="card-title hieght-t kart-header">
						{(() => {
							if (this.props.theState === 'indirimli')
								return <h5 className="badge badge-success">indirimli</h5>;
							else if (this.props.theState === 'lastThreeDay')
								return <h5 className="badge badge-danger">Son 3 gün</h5>;
							else if (this.props.theState === 'soon')
								return <h5 className="badge badge-warning">Yakında</h5>;
							else return null;
						})()}

						<h2 className="navbar">{this.props.turName}</h2>
					</div>
					<div className="card-header hieght-h">
						<img src={this.props.img} style={{ maxWidth: '100%' }} />
					</div>
					<div className="card-body card-text hieght-b">
						<p>
							{(() => {
								if (this.props.description === null)
									return <p>Lütfen detaylı bilgi için bizimle iletşime geçin</p>;
								else return <p>{this.props.description}</p>;
							})()}
						</p>
					</div>
					<div className="card-footer">
						<h6>
							<a className="btn border btn-light" role="button" href="#">
								Göz At
							</a>
						</h6>
					</div>
				</div>
				<a href="#">
					<i className="fas fa-chevron-right next" onClick={this.increment} />
				</a>
			</div>
		);
	}
}
export default CreatContent;
