import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        { key: 'all', name: 'Бүх бараа' },
        { key: 'chairs', name: 'Сандал' },
        { key: 'tables', name: 'Ширээ' },
        { key: 'light', name: 'Гэрэл' },
        { key: 'sofa', name: 'Буйдан' },
      ],
    }
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    )
  }
}

export default Categories
