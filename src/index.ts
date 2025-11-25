export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "a highly detailed, anthropomorphic Phat Gopher, undeniably fat and fluffy ('phat'). It is holding a realistic professional-grade black DSLR camera, equipped with a telephoto lens, held level at chest height, as if about to take a photograph. The location may or may not be outdoor or indoor. The gopher may or may not be wearing human clothing. The overall style should be photorealistic and hyper-detailed, utilizing cinematic lighting with a shallow depth of field (bokeh) to keep the focus sharply on the subject. The atmosphere should be warm and adventurous.",
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
