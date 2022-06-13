<script>
export default {
  name: "Button",
  props: {
    color: String,
  },
  render() {
    return (
      <button
        type="button"
        class={`btn bg-${
          this.color === "black" || this.color === "white"
            ? this.color
            : this.color + "-500"
        } ${this.color === "black" ? "text-white" : ""}`}
      >
        Add Task
      </button>
    );
  },
};
</script>
