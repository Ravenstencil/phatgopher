export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "a Phat Gopher who is holding a DSLR camera at chest level standing in random location.",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
