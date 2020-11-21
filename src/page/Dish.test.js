import React, {useEffect, useState} from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

// test taeget component
import Dish from "./Dish"

let container = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

// utility function for test
const sel = id => `[data-testid="${id}"]`

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

// define expected
const dish = {
    description: "オムライス",
    price: 800,
    shopName: "ポムの樹"
}


it("test start Dish.jsx", () => {
    act(() => {
        // set expected and rendering
        render(<Dish dishInfo = {dish}/>, container)
    })

    expect(
        container.querySelector(sel("description")).textContent
    ).toEqual(`${dish.description}　　　${dish.price}円`)

    expect(
        container.querySelector(sel("shop-name")).textContent
    ).toEqual(dish.shopName)
})