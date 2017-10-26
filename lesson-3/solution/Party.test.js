import React from "react"
import Party from "./Party"
import { shallow } from "enzyme"

describe("Party.js", () => {
    it("should render", () => {
        shallow(<Party party={{}} />)
    })

    it("should display party name", () => {
        const party = { name: "MyParty", members: 100 }
        const wrapper = shallow(<Party party={party} />)
        const text = wrapper.text()
        expect(text).toMatch("MyParty")
    })

    it("should display amount of members", () => {
        const party = { name: "MyParty", members: 100 }
        const wrapper = shallow(<Party party={party} />)
        const text = wrapper.text()
        expect(text).toMatch("100")
    })

    it("should match snapshot", () => {
        const party = { name: "MyParty", members: 100 }
        const wrapper = shallow(<Party party={party} />)
        const component = wrapper.debug()
        expect(component).toMatchSnapshot()
    })

})
