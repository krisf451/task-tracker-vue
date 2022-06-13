<script>
export default {
  name: "Button",
  props: {
    color: String,
    text: {
      type: String,
      default: "Click Me",
    },
  },
  render() {
    return (
      <button type="button" class="btn" style={`background: ${this.color}`}>
        {this.text}
      </button>
    );
  },
};
</script>
