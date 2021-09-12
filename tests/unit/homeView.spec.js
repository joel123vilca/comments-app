import { shallowMount } from "@vue/test-utils";
import NewComment from "@/components/NewComment";

describe("comment view", () => {
  const build = () => {
    const wrapper = shallowMount(NewComment);

    return {
      wrapper,
      input: () => wrapper.find("input"),
      button: () => wrapper.find("button")
    };
  };

  it("renders the component", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("renders the right", () => {
    const { input, button } = build();
    expect(input().exists()).toBe(true);
    expect(button().exists()).toBe(true);
  });
});
