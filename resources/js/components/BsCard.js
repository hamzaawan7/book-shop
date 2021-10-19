import React, { Component } from "react";

export class BsCard extends Component {
  render() {
    return (
      <div style={this.props.cardStyles} className={"card " + this.props.cardClasses}>
        <div className={"card-header " + this.props.cardHeaderClasses}>
          {this.props.cardHeader}
        </div>
        <div className={"card-body " + this.props.cardBodyClasses}>
          {this.props.cardBody}
        </div>
        {
          this.props.cardFooter && 
          <div className={"card-footer " + this.props.cardFooterClasses}>
            {this.props.cardFooter}
          </div>
        }
      </div>
    );
  }
}

export default BsCard;
