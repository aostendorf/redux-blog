import React from 'react';
import { connect } from 'react-redux';

const BlogList = ({ blogs }) => (
  <ul>
  { todos.map( (b) => {
    return (
      <li key={b.id}>
       {t.name}
      </li>
    )
   })
  }
</ul>

const mapStateToProps = (state) => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(BlogList)