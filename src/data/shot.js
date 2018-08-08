import React, { Component } from 'react';

class Shot extends React.Component {
  render() {
    return (

        <article className='shot'>
          <figure>
            <img src={ this.props.data.img } alt='' />
          </figure>

          <div className='shots__stats'>
            <ul className='shots__list'>
              <li><i className='fa fa-eye' />{ this.props.data.stats[0] }</li>
              <li><i className='fa fa-comment' />{ this.props.data.stats[1] }</li>
              <li><i className='fa fa-heart' />{ this.props.data.stats[2] }</li>
            </ul>
            <div className="author"><img className="avatarImage" src={ this.props.data.author.avatar } /><a href="#" className="link">{ this.props.data.author.name }</a></div>
          </div>
        </article>

      );
    }
  }

  export default Shot;
