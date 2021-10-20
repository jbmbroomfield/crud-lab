import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { addReview, deleteReview } from '../actions/reviews';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews
          reviews={this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)}
          deleteReview={this.props.deleteReview}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews,
})

const mapDispatchToProps = {
  addReview,
  deleteReview
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
