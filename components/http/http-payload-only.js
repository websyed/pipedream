module.exports = {
  name: "http-payload-only",
  version: "0.0.1",
  props: {
    http: "$.interface.http"
  },
  async run(event) {
    const { body } = event;
    this.http.respond({
      status: 200,
      body
    });
    // Emit the HTTP payload
    this.$emit({ body });
  }
};
