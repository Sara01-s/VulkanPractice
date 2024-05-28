#version 450

layout (location = 0) in vec2 i_FragOffset;
layout (location = 0) out vec4 o_PixelColor;

layout (set = 0, binding = 0) uniform GlobalUbo {
    mat4 ProjectionMatrix;
    mat4 ViewMatrix;
    vec4 AmbientLightColor; // w is intensity
    vec3 LightPosition;
    vec4 LightColor; // w is intensity
} ubo;

void main() {
    float dst = sqrt(dot(i_FragOffset, i_FragOffset)); // dot (v, v) = length(i_FragOffset^2)

    if (dst >= 1.0) {
        discard;
    }

    o_PixelColor = vec4(1.0, 1.0, 1.0, 1.0);
}

