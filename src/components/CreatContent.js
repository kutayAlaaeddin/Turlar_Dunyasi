import React, { Component } from 'react';
import Conten from './Content';

class CreatContent extends Component {


	render() {
		return (
			<div className="slayd">
				<a href="#">
					{' '}
					<i className="fas fa-chevron-left prev" />
				</a>

				<div className="card hieght">
					<div className="card-title hieght-t kart-header">
						{/* eğer the state özelliği sabitse bu kod kullanılır
						 <h5 className="badge badge-warning mx-auto text-gray">{this.props.theState}</h5> 
						 */}

						{/*theState adlı özelliğin değerine göre yazı ve style belirleme kısmı*/}

						{(() => {
							if (this.props.theState == 'indirimli')
								return <h5 className="badge badge-success">indirimli</h5>;
							else if (this.props.theState == 'lastThreeDay')
								return <h5 className="badge badge-danger">Son 3 gün</h5>;
							else if (this.props.theState == 'soon')
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
							if (this.props.description == null)
								return <p>Lütfen detaylı bilgi için bizimle iletşime geçin</p>;
							else
								return <p>{this.props.description}</p>
							
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
					<i className="fas fa-chevron-right next" />
				</a>
			</div>
		);
	}
}
export default CreatContent;
