import { cva } from "class-variance-authority";
import { svgLogoVariants } from "./logo.styles";
interface IProps {
  variant: "large" | "medium" | "small" | "xsmall";
}
export const Logo = ({ variant }: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 464.87997 380.250002"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      className={svgLogoVariants({ intent: variant })}
    >
      <defs>
        <g />
        <clipPath id="f073f3b0af">
          <path
            d="M 276 94 L 296.207031 94 L 296.207031 114 L 276 114 Z M 276 94 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="65e4578613">
          <path
            d="M 168.960938 75.15625 L 296.207031 75.15625 L 296.207031 211.386719 L 168.960938 211.386719 Z M 168.960938 75.15625 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#f073f3b0af)">
        <path
          fill="currentColor"
          d="M 295.398438 105.984375 L 283.964844 95.429688 C 282.945312 94.496094 281.363281 94.554688 280.429688 95.570312 L 277.402344 98.832031 C 276.46875 99.847656 276.527344 101.429688 277.542969 102.363281 L 288.964844 112.914062 C 289.980469 113.851562 291.5625 113.792969 292.5 112.777344 L 295.523438 109.511719 C 296.460938 108.5 296.402344 106.917969 295.386719 105.984375 Z M 295.398438 105.984375 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
      <g clipPath="url(#65e4578613)">
        <path
          fill="#00c2cb"
          d="M 295.734375 158.96875 C 297.476562 141.449219 291.414062 124.332031 278.960938 111.867188 C 269.90625 102.800781 258.160156 96.929688 245.445312 95.222656 L 244.324219 95.074219 L 244.324219 83.957031 L 252.316406 83.957031 C 253.691406 83.957031 254.8125 82.835938 254.8125 81.464844 L 254.8125 77.648438 C 254.8125 76.273438 253.691406 75.15625 252.316406 75.15625 L 224.101562 75.15625 C 222.726562 75.15625 221.605469 76.273438 221.605469 77.648438 L 221.605469 81.464844 C 221.605469 82.835938 222.726562 83.957031 224.101562 83.957031 L 231.480469 83.957031 L 231.480469 94.992188 L 230.347656 95.132812 C 221.222656 96.261719 212.539062 99.503906 204.914062 104.644531 C 201.902344 106.675781 201.242188 110.828125 203.472656 113.699219 C 205.574219 116.410156 209.535156 116.652344 212.296875 114.828125 C 219.828125 109.847656 228.570312 107.242188 237.589844 107.242188 C 249.789062 107.242188 261.382812 112.0625 270 120.664062 C 280.671875 131.324219 285.292969 146.210938 282.761719 161.042969 C 279.46875 180.28125 263.796875 195.492188 244.472656 198.332031 C 237.164062 199.402344 229.769531 198.78125 222.785156 196.382812 C 216.175781 194.121094 210.171875 190.375 205.226562 185.449219 C 198.160156 178.402344 193.5625 169.277344 192.175781 159.394531 L 191.96875 157.929688 L 198.5625 157.929688 C 201.128906 157.929688 202.746094 155.140625 201.460938 152.925781 L 188.332031 130.214844 C 187.035156 127.988281 183.824219 127.988281 182.53125 130.214844 L 169.398438 152.925781 C 168.117188 155.140625 169.734375 157.929688 172.296875 157.929688 L 179.332031 157.929688 L 179.449219 159.082031 C 180.835938 172.414062 186.792969 184.8125 196.277344 194.28125 C 208.65625 206.636719 225.636719 212.722656 243.066406 211.132812 C 270.636719 208.605469 292.972656 186.488281 295.699219 158.96875 Z M 295.734375 158.96875 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
      <path
        fill="currentColor"
        d="M 239 161.953125 C 238.828125 161.964844 238.652344 161.976562 238.480469 161.976562 C 236.757812 161.976562 235.105469 161.296875 233.894531 160.085938 C 232.554688 158.75 231.863281 156.878906 232.011719 154.988281 C 232.164062 153.097656 233.121094 151.355469 234.667969 150.238281 L 254.039062 136.246094 C 255.089844 135.484375 256.554688 135.613281 257.46875 136.523438 C 258.390625 137.445312 258.519531 138.898438 257.757812 139.960938 L 243.746094 159.289062 C 242.625 160.835938 240.90625 161.804688 239 161.953125 Z M 273.488281 132.808594 C 277.078125 139.074219 278.949219 146.121094 278.949219 153.339844 C 278.949219 160.570312 277.078125 167.617188 273.476562 173.890625 C 273.453125 173.960938 273.417969 174.042969 273.371094 174.097656 C 273.335938 174.15625 273.292969 174.214844 273.246094 174.273438 C 269.640625 180.410156 264.5 185.527344 258.355469 189.128906 C 258.289062 189.183594 258.207031 189.242188 258.125 189.277344 C 258.070312 189.3125 258.011719 189.335938 257.941406 189.359375 C 251.785156 192.875 244.867188 194.746094 237.777344 194.800781 C 237.730469 194.800781 237.683594 194.8125 237.636719 194.8125 C 237.601562 194.8125 237.566406 194.8125 237.53125 194.8125 C 237.488281 194.8125 237.441406 194.8125 237.394531 194.8125 C 234.265625 194.8125 231.121094 194.445312 228.074219 193.753906 C 226.640625 193.429688 225.742188 191.988281 226.074219 190.558594 C 226.410156 189.140625 227.84375 188.238281 229.273438 188.5625 C 231.144531 189 233.0625 189.265625 234.980469 189.394531 L 234.980469 187.675781 C 234.980469 186.199219 236.171875 185.011719 237.648438 185.011719 C 239.125 185.011719 240.304688 186.210938 240.304688 187.675781 L 240.304688 189.371094 C 244.773438 189.011719 249.117188 187.835938 253.148438 185.875 L 252.292969 184.398438 C 251.554688 183.128906 251.992188 181.492188 253.265625 180.765625 C 254.535156 180.027344 256.175781 180.464844 256.914062 181.746094 L 257.757812 183.210938 C 261.511719 180.652344 264.769531 177.398438 267.332031 173.648438 L 265.851562 172.808594 C 264.582031 172.070312 264.144531 170.445312 264.871094 169.175781 C 265.597656 167.894531 267.238281 167.457031 268.519531 168.195312 L 270 169.046875 C 271.984375 164.953125 273.175781 160.523438 273.511719 155.980469 L 271.789062 155.980469 C 270.324219 155.980469 269.121094 154.78125 269.121094 153.316406 C 269.121094 151.851562 270.324219 150.652344 271.789062 150.652344 L 273.511719 150.652344 C 273.175781 146.109375 271.984375 141.691406 270 137.597656 L 268.511719 138.460938 L 268.5 138.472656 C 268.09375 138.691406 267.644531 138.808594 267.191406 138.808594 C 266.246094 138.808594 265.367188 138.300781 264.894531 137.480469 C 264.15625 136.210938 264.59375 134.574219 265.863281 133.835938 L 267.34375 132.996094 C 264.777344 129.246094 261.523438 125.996094 257.769531 123.433594 L 256.925781 124.910156 C 256.453125 125.730469 255.574219 126.238281 254.613281 126.238281 C 254.152344 126.238281 253.703125 126.121094 253.308594 125.902344 L 253.285156 125.878906 C 252.027344 125.140625 251.589844 123.515625 252.316406 122.246094 L 253.171875 120.757812 C 249.140625 118.808594 244.796875 117.621094 240.339844 117.273438 L 240.339844 118.96875 C 240.339844 120.433594 239.136719 121.632812 237.671875 121.632812 C 236.203125 121.632812 235.003906 120.433594 235.003906 118.96875 L 235.003906 117.261719 C 234.96875 117.261719 234.921875 117.273438 234.886719 117.273438 L 233.304688 117.402344 C 231.964844 117.5625 230.625 117.78125 229.296875 118.082031 C 227.867188 118.417969 226.433594 117.515625 226.109375 116.085938 C 225.773438 114.65625 226.675781 113.226562 228.109375 112.890625 C 229.75 112.511719 231.410156 112.234375 233.074219 112.074219 C 236.148438 111.773438 239.230469 111.773438 242.304688 112.132812 C 247.847656 112.765625 253.171875 114.542969 258.011719 117.308594 C 258.082031 117.332031 258.148438 117.367188 258.21875 117.414062 C 258.289062 117.449219 258.347656 117.496094 258.402344 117.539062 C 260.136719 118.554688 261.800781 119.683594 263.359375 120.941406 L 263.371094 120.953125 C 266.984375 123.871094 270.035156 127.355469 272.574219 131.230469 L 272.585938 131.253906 C 272.828125 131.644531 273.070312 132.039062 273.304688 132.441406 C 273.324219 132.464844 273.347656 132.5 273.359375 132.523438 L 273.40625 132.578125 L 273.441406 132.648438 C 273.476562 132.707031 273.5 132.765625 273.511719 132.820312 Z M 238.582031 156.660156 C 238.929688 156.625 239.242188 156.453125 239.4375 156.1875 L 243.710938 150.285156 L 237.796875 154.550781 C 237.519531 154.746094 237.347656 155.070312 237.324219 155.402344 C 237.300781 155.738281 237.429688 156.074219 237.671875 156.316406 C 237.914062 156.558594 238.25 156.671875 238.59375 156.648438 Z M 238.582031 156.660156 "
        fillOpacity="1"
        fillRule="evenodd"
      />
      <g fill="#f7f7f7" fillOpacity="1">
        <g transform="translate(86.039623, 267.347651)">
          <g>
            <path d="M 21.488281 -31.257812 C 21.488281 -35.734375 19.058594 -38.117188 14.628906 -38.117188 L 9.292969 -38.117188 C 4.8125 -38.117188 2.382812 -35.734375 2.382812 -31.257812 L 2.382812 -6.859375 C 2.382812 -2.382812 4.8125 0 9.292969 0 L 14.628906 0 C 19.058594 0 21.488281 -2.382812 21.488281 -6.859375 L 21.488281 -12.007812 C 21.488281 -12.484375 21.203125 -12.769531 20.726562 -12.769531 L 15.960938 -12.769531 C 15.4375 -12.769531 15.199219 -12.484375 15.199219 -12.007812 L 15.199219 -8.195312 C 15.199219 -6.910156 14.53125 -6.289062 13.292969 -6.289062 L 10.816406 -6.289062 C 9.578125 -6.289062 8.910156 -6.910156 8.910156 -8.195312 L 8.910156 -29.921875 C 8.910156 -31.160156 9.53125 -31.828125 10.816406 -31.828125 L 13.292969 -31.828125 C 14.53125 -31.828125 15.199219 -31.160156 15.199219 -29.921875 L 15.199219 -26.109375 C 15.199219 -25.632812 15.4375 -25.347656 15.960938 -25.347656 L 20.726562 -25.347656 C 21.203125 -25.347656 21.488281 -25.632812 21.488281 -26.109375 Z M 21.488281 -31.257812 " />
          </g>
        </g>
      </g>
      <g fill="#f7f7f7" fillOpacity="1">
        <g transform="translate(115.437186, 267.347651)">
          <g>
            <path d="M 2.382812 -6.859375 C 2.382812 -2.382812 4.765625 0 9.242188 0 L 14.578125 0 C 19.058594 0 21.441406 -2.382812 21.441406 -6.859375 L 21.441406 -31.257812 C 21.441406 -35.734375 19.058594 -38.117188 14.578125 -38.117188 L 9.242188 -38.117188 C 4.765625 -38.117188 2.382812 -35.734375 2.382812 -31.257812 Z M 10.625 -6.144531 C 9.386719 -6.144531 8.71875 -6.765625 8.71875 -8.050781 L 8.71875 -30.066406 C 8.71875 -31.304688 9.386719 -31.972656 10.625 -31.972656 L 13.386719 -31.972656 C 14.628906 -31.972656 15.292969 -31.304688 15.292969 -30.066406 L 15.292969 -8.050781 C 15.292969 -6.765625 14.628906 -6.144531 13.386719 -6.144531 Z M 10.625 -6.144531 " />
          </g>
        </g>
      </g>
      <g fill="#f7f7f7" fillOpacity="1">
        <g transform="translate(144.787109, 267.347651)">
          <g>
            <path d="M 2.382812 -0.761719 C 2.382812 -0.238281 2.621094 0 3.144531 0 L 14.578125 0 C 19.058594 0 21.441406 -2.382812 21.441406 -6.859375 L 21.441406 -31.207031 C 21.441406 -35.6875 19.058594 -38.117188 14.578125 -38.117188 L 3.144531 -38.117188 C 2.621094 -38.117188 2.382812 -37.832031 2.382812 -37.355469 Z M 8.863281 -6.289062 L 8.863281 -31.828125 L 13.246094 -31.828125 C 14.484375 -31.828125 15.152344 -31.160156 15.152344 -29.875 L 15.152344 -8.195312 C 15.152344 -6.910156 14.484375 -6.289062 13.246094 -6.289062 Z M 8.863281 -6.289062 " />
          </g>
        </g>
      </g>
      <g fill="#f7f7f7" fillOpacity="1">
        <g transform="translate(174.137036, 267.347651)">
          <g>
            <path d="M 21.394531 -37.355469 C 21.394531 -37.832031 21.203125 -38.117188 20.632812 -38.117188 L 3.097656 -38.117188 C 2.667969 -38.117188 2.382812 -37.832031 2.382812 -37.355469 L 2.382812 -0.761719 C 2.382812 -0.285156 2.667969 0 3.097656 0 L 20.632812 0 C 21.203125 0 21.394531 -0.285156 21.394531 -0.761719 L 21.394531 -5.527344 C 21.394531 -6.050781 21.203125 -6.289062 20.632812 -6.289062 L 8.71875 -6.289062 L 8.71875 -15.914062 L 17.820312 -15.914062 C 18.296875 -15.914062 18.582031 -16.199219 18.582031 -16.722656 L 18.582031 -21.441406 C 18.582031 -21.964844 18.296875 -22.25 17.820312 -22.25 L 8.71875 -22.25 L 8.71875 -31.78125 L 20.632812 -31.78125 C 21.203125 -31.78125 21.394531 -32.113281 21.394531 -32.589844 Z M 21.394531 -37.355469 " />
          </g>
        </g>
      </g>
      <g fill="#f7f7f7" fillOpacity="1">
        <g transform="translate(203.43931, 267.347651)">
          <g>
            <path d="M 2.191406 -38.117188 C 1.714844 -38.117188 1.429688 -37.832031 1.429688 -37.355469 L 1.429688 -32.589844 C 1.429688 -32.113281 1.714844 -31.828125 2.191406 -31.828125 L 7.71875 -31.828125 L 7.71875 -0.761719 C 7.71875 -0.238281 8.003906 0 8.480469 0 L 13.4375 0 C 13.960938 0 14.199219 -0.238281 14.199219 -0.761719 L 14.199219 -31.828125 L 19.726562 -31.828125 C 20.25 -31.828125 20.488281 -32.113281 20.488281 -32.589844 L 20.488281 -37.355469 C 20.488281 -37.832031 20.25 -38.117188 19.726562 -38.117188 Z M 2.191406 -38.117188 " />
          </g>
        </g>
      </g>
      <g fill="#f7f7f7" fillOpacity="1">
        <g transform="translate(230.883409, 267.347651)">
          <g>
            <path d="M 21.964844 -31.257812 C 21.964844 -35.734375 19.582031 -38.117188 15.105469 -38.117188 L 3.144531 -38.117188 C 2.667969 -38.117188 2.382812 -37.832031 2.382812 -37.355469 L 2.382812 -0.761719 C 2.382812 -0.285156 2.667969 0 3.144531 0 L 8.101562 0 C 8.578125 0 8.863281 -0.285156 8.863281 -0.761719 L 8.863281 -12.769531 L 12.148438 -12.769531 L 15.34375 -0.667969 C 15.4375 -0.238281 15.675781 0 16.152344 0 L 21.105469 0 C 21.632812 0 21.917969 -0.285156 21.773438 -0.859375 L 18.488281 -13.339844 C 20.773438 -14.339844 21.964844 -16.4375 21.964844 -19.628906 Z M 8.863281 -19.058594 L 8.863281 -31.828125 L 13.578125 -31.828125 C 14.816406 -31.828125 15.484375 -31.160156 15.484375 -29.921875 L 15.484375 -20.964844 C 15.484375 -19.726562 14.816406 -19.058594 13.578125 -19.058594 Z M 8.863281 -19.058594 " />
          </g>
        </g>
      </g>
      <g fill="#f7f7f7" fillOpacity="1">
        <g transform="translate(260.757434, 267.347651)">
          <g>
            <path d="M 25.347656 0 C 25.917969 0 26.109375 -0.285156 26.015625 -0.808594 L 18.105469 -37.449219 C 18.011719 -37.925781 17.722656 -38.117188 17.296875 -38.117188 L 10.671875 -38.117188 C 10.242188 -38.117188 9.957031 -37.925781 9.863281 -37.449219 L 1.953125 -0.808594 C 1.8125 -0.285156 2.046875 0 2.574219 0 L 7.671875 0 C 8.101562 0 8.339844 -0.238281 8.433594 -0.667969 L 9.71875 -7.625 L 18.199219 -7.625 L 19.535156 -0.667969 C 19.628906 -0.238281 19.867188 0 20.296875 0 Z M 17.011719 -13.152344 L 10.910156 -13.152344 L 13.960938 -29.777344 Z M 17.011719 -13.152344 " />
          </g>
        </g>
      </g>
      <g fill="#f7f7f7" fillOpacity="1">
        <g transform="translate(294.204867, 267.347651)">
          <g>
            <path d="M 21.488281 -31.257812 C 21.488281 -35.734375 19.058594 -38.117188 14.628906 -38.117188 L 9.292969 -38.117188 C 4.8125 -38.117188 2.382812 -35.734375 2.382812 -31.257812 L 2.382812 -6.859375 C 2.382812 -2.382812 4.8125 0 9.292969 0 L 14.628906 0 C 19.058594 0 21.488281 -2.382812 21.488281 -6.859375 L 21.488281 -12.007812 C 21.488281 -12.484375 21.203125 -12.769531 20.726562 -12.769531 L 15.960938 -12.769531 C 15.4375 -12.769531 15.199219 -12.484375 15.199219 -12.007812 L 15.199219 -8.195312 C 15.199219 -6.910156 14.53125 -6.289062 13.292969 -6.289062 L 10.816406 -6.289062 C 9.578125 -6.289062 8.910156 -6.910156 8.910156 -8.195312 L 8.910156 -29.921875 C 8.910156 -31.160156 9.53125 -31.828125 10.816406 -31.828125 L 13.292969 -31.828125 C 14.53125 -31.828125 15.199219 -31.160156 15.199219 -29.921875 L 15.199219 -26.109375 C 15.199219 -25.632812 15.4375 -25.347656 15.960938 -25.347656 L 20.726562 -25.347656 C 21.203125 -25.347656 21.488281 -25.632812 21.488281 -26.109375 Z M 21.488281 -31.257812 " />
          </g>
        </g>
      </g>
      <g fill="#f7f7f7" fillOpacity="1">
        <g transform="translate(323.602436, 267.347651)">
          <g>
            <path d="M 22.773438 0 C 23.539062 0 23.824219 -0.476562 23.488281 -1.097656 L 14.867188 -20.34375 L 22.964844 -36.972656 C 23.300781 -37.640625 23.011719 -38.117188 22.296875 -38.117188 L 17.296875 -38.117188 C 16.773438 -38.117188 16.4375 -37.878906 16.199219 -37.402344 L 8.863281 -22.394531 L 8.863281 -37.164062 C 8.863281 -37.785156 8.527344 -38.117188 7.910156 -38.117188 L 3.335938 -38.117188 C 2.714844 -38.117188 2.382812 -37.785156 2.382812 -37.164062 L 2.382812 -0.953125 C 2.382812 -0.332031 2.714844 0 3.335938 0 L 7.910156 0 C 8.527344 0 8.863281 -0.332031 8.863281 -0.953125 L 8.863281 -11.484375 L 10.625 -14.867188 L 16.628906 -0.714844 C 16.820312 -0.238281 17.152344 0 17.722656 0 Z M 22.773438 0 " />
          </g>
        </g>
      </g>
      <g fill="#f7f7f7" fillOpacity="1">
        <g transform="translate(354.667591, 267.347651)">
          <g>
            <path d="M 3.527344 -38.117188 C 3.050781 -38.070312 2.761719 -37.832031 2.761719 -37.308594 L 2.761719 -32.542969 C 2.761719 -32.066406 3.050781 -31.78125 3.527344 -31.78125 L 13.386719 -31.78125 L 1.523438 -1.144531 C 1.238281 -0.476562 1.476562 0 2.238281 0 L 20.773438 0 C 21.25 -0.046875 21.535156 -0.332031 21.535156 -0.808594 L 21.535156 -5.527344 C 21.535156 -6.050781 21.25 -6.289062 20.773438 -6.289062 L 10.292969 -6.289062 L 22.15625 -36.972656 C 22.394531 -37.640625 22.203125 -38.117188 21.441406 -38.117188 Z M 3.527344 -38.117188 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(143.187615, 299.096821)">
          <g>
            <path d="M 5.6875 -11.40625 C 6.132812 -11.40625 6.554688 -11.316406 6.953125 -11.140625 C 7.347656 -10.960938 7.691406 -10.722656 7.984375 -10.421875 C 8.285156 -10.117188 8.519531 -9.757812 8.6875 -9.34375 C 8.863281 -8.925781 8.953125 -8.484375 8.953125 -8.015625 C 8.953125 -7.546875 8.863281 -7.101562 8.6875 -6.6875 C 8.519531 -6.269531 8.285156 -5.90625 7.984375 -5.59375 C 7.691406 -5.289062 7.347656 -5.050781 6.953125 -4.875 C 6.554688 -4.695312 6.132812 -4.609375 5.6875 -4.609375 L 3.1875 -4.609375 L 3.1875 0 L 0.75 0 L 0.75 -11.40625 Z M 5.359375 -6.828125 C 5.671875 -6.828125 5.941406 -6.941406 6.171875 -7.171875 C 6.398438 -7.398438 6.515625 -7.679688 6.515625 -8.015625 C 6.515625 -8.335938 6.398438 -8.613281 6.171875 -8.84375 C 5.941406 -9.070312 5.671875 -9.1875 5.359375 -9.1875 L 3.1875 -9.1875 L 3.1875 -6.828125 Z M 5.359375 -6.828125 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(153.82601, 299.096821)">
          <g>
            <path d="M 8.96875 -8.015625 C 8.96875 -7.648438 8.914062 -7.300781 8.8125 -6.96875 C 8.707031 -6.644531 8.5625 -6.347656 8.375 -6.078125 C 8.195312 -5.804688 7.976562 -5.5625 7.71875 -5.34375 C 7.46875 -5.132812 7.191406 -4.96875 6.890625 -4.84375 L 10.671875 0 L 7.828125 0 L 4.296875 -4.609375 L 3.203125 -4.609375 L 3.203125 0 L 0.75 0 L 0.75 -11.40625 L 5.6875 -11.40625 C 6.132812 -11.40625 6.554688 -11.316406 6.953125 -11.140625 C 7.359375 -10.960938 7.707031 -10.722656 8 -10.421875 C 8.300781 -10.117188 8.535156 -9.757812 8.703125 -9.34375 C 8.878906 -8.925781 8.96875 -8.484375 8.96875 -8.015625 Z M 5.375 -6.828125 C 5.6875 -6.828125 5.953125 -6.941406 6.171875 -7.171875 C 6.398438 -7.398438 6.515625 -7.679688 6.515625 -8.015625 C 6.515625 -8.335938 6.398438 -8.613281 6.171875 -8.84375 C 5.953125 -9.070312 5.6875 -9.1875 5.375 -9.1875 L 3.203125 -9.1875 L 3.203125 -6.828125 Z M 5.375 -6.828125 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(166.379505, 299.096821)">
          <g>
            <path d="M 6.140625 -11.578125 C 6.921875 -11.578125 7.648438 -11.421875 8.328125 -11.109375 C 9.015625 -10.796875 9.613281 -10.367188 10.125 -9.828125 C 10.632812 -9.296875 11.035156 -8.675781 11.328125 -7.96875 C 11.628906 -7.257812 11.78125 -6.503906 11.78125 -5.703125 C 11.78125 -4.898438 11.628906 -4.140625 11.328125 -3.421875 C 11.035156 -2.703125 10.632812 -2.070312 10.125 -1.53125 C 9.613281 -1 9.015625 -0.578125 8.328125 -0.265625 C 7.648438 0.046875 6.921875 0.203125 6.140625 0.203125 C 5.367188 0.203125 4.640625 0.046875 3.953125 -0.265625 C 3.265625 -0.578125 2.671875 -1 2.171875 -1.53125 C 1.671875 -2.070312 1.269531 -2.703125 0.96875 -3.421875 C 0.675781 -4.140625 0.53125 -4.898438 0.53125 -5.703125 C 0.53125 -6.503906 0.675781 -7.257812 0.96875 -7.96875 C 1.269531 -8.675781 1.671875 -9.296875 2.171875 -9.828125 C 2.671875 -10.367188 3.265625 -10.796875 3.953125 -11.109375 C 4.640625 -11.421875 5.367188 -11.578125 6.140625 -11.578125 Z M 6.140625 -2.21875 C 6.585938 -2.21875 7.003906 -2.304688 7.390625 -2.484375 C 7.773438 -2.671875 8.109375 -2.921875 8.390625 -3.234375 C 8.679688 -3.554688 8.910156 -3.925781 9.078125 -4.34375 C 9.242188 -4.757812 9.328125 -5.210938 9.328125 -5.703125 C 9.328125 -6.179688 9.242188 -6.628906 9.078125 -7.046875 C 8.910156 -7.472656 8.679688 -7.84375 8.390625 -8.15625 C 8.109375 -8.476562 7.773438 -8.726562 7.390625 -8.90625 C 7.003906 -9.09375 6.585938 -9.1875 6.140625 -9.1875 C 5.703125 -9.1875 5.289062 -9.09375 4.90625 -8.90625 C 4.519531 -8.726562 4.179688 -8.476562 3.890625 -8.15625 C 3.597656 -7.84375 3.367188 -7.472656 3.203125 -7.046875 C 3.046875 -6.628906 2.96875 -6.179688 2.96875 -5.703125 C 2.96875 -5.210938 3.046875 -4.757812 3.203125 -4.34375 C 3.367188 -3.925781 3.597656 -3.554688 3.890625 -3.234375 C 4.179688 -2.921875 4.519531 -2.671875 4.90625 -2.484375 C 5.289062 -2.304688 5.703125 -2.21875 6.140625 -2.21875 Z M 6.140625 -2.21875 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(180.188287, 299.096821)">
          <g>
            <path d="M 7.296875 -11.40625 L 7.296875 -4.09375 C 7.296875 -3.613281 7.265625 -3.15625 7.203125 -2.71875 C 7.140625 -2.289062 6.960938 -1.875 6.671875 -1.46875 C 6.304688 -0.9375 5.859375 -0.539062 5.328125 -0.28125 C 4.796875 -0.0195312 4.226562 0.109375 3.625 0.109375 C 3.207031 0.109375 2.8125 0.0390625 2.4375 -0.09375 C 2.070312 -0.238281 1.734375 -0.429688 1.421875 -0.671875 C 1.117188 -0.910156 0.851562 -1.191406 0.625 -1.515625 C 0.40625 -1.847656 0.234375 -2.203125 0.109375 -2.578125 L 2.21875 -3.28125 C 2.300781 -2.96875 2.460938 -2.707031 2.703125 -2.5 C 2.953125 -2.300781 3.238281 -2.203125 3.5625 -2.203125 C 3.9375 -2.203125 4.226562 -2.328125 4.4375 -2.578125 C 4.644531 -2.835938 4.773438 -3.125 4.828125 -3.4375 C 4.828125 -3.488281 4.828125 -3.640625 4.828125 -3.890625 C 4.835938 -4.148438 4.84375 -4.46875 4.84375 -4.84375 C 4.84375 -5.226562 4.84375 -5.660156 4.84375 -6.140625 C 4.84375 -6.617188 4.84375 -7.097656 4.84375 -7.578125 C 4.84375 -8.710938 4.835938 -9.988281 4.828125 -11.40625 Z M 7.296875 -11.40625 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(189.700151, 299.096821)">
          <g>
            <path d="M 0.765625 -11.40625 L 7.90625 -11.40625 L 7.90625 -9.1875 L 3.21875 -9.1875 L 3.21875 -7.125 L 7.34375 -7.125 L 7.34375 -4.90625 L 3.21875 -4.90625 L 3.21875 -2.203125 L 7.90625 -2.203125 L 7.90625 0 L 0.765625 0 Z M 0.765625 -11.40625 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(199.871841, 299.096821)">
          <g>
            <path d="M 6.125 -2.21875 C 6.644531 -2.21875 7.148438 -2.332031 7.640625 -2.5625 C 8.140625 -2.800781 8.640625 -3.203125 9.140625 -3.765625 L 10.71875 -2.265625 C 10.082031 -1.453125 9.359375 -0.835938 8.546875 -0.421875 C 7.742188 -0.00390625 6.910156 0.203125 6.046875 0.203125 C 5.273438 0.203125 4.550781 0.046875 3.875 -0.265625 C 3.195312 -0.578125 2.609375 -1 2.109375 -1.53125 C 1.617188 -2.070312 1.226562 -2.695312 0.9375 -3.40625 C 0.65625 -4.125 0.515625 -4.890625 0.515625 -5.703125 C 0.515625 -6.503906 0.660156 -7.257812 0.953125 -7.96875 C 1.253906 -8.675781 1.65625 -9.296875 2.15625 -9.828125 C 2.65625 -10.367188 3.25 -10.796875 3.9375 -11.109375 C 4.625 -11.421875 5.351562 -11.578125 6.125 -11.578125 C 6.84375 -11.578125 7.523438 -11.441406 8.171875 -11.171875 C 8.828125 -10.898438 9.46875 -10.453125 10.09375 -9.828125 L 8.671875 -8.109375 C 8.222656 -8.523438 7.796875 -8.804688 7.390625 -8.953125 C 6.992188 -9.097656 6.570312 -9.171875 6.125 -9.171875 C 5.6875 -9.171875 5.269531 -9.078125 4.875 -8.890625 C 4.488281 -8.710938 4.148438 -8.46875 3.859375 -8.15625 C 3.566406 -7.84375 3.335938 -7.472656 3.171875 -7.046875 C 3.003906 -6.628906 2.921875 -6.179688 2.921875 -5.703125 C 2.921875 -5.210938 3.003906 -4.757812 3.171875 -4.34375 C 3.335938 -3.925781 3.566406 -3.554688 3.859375 -3.234375 C 4.148438 -2.921875 4.488281 -2.671875 4.875 -2.484375 C 5.269531 -2.304688 5.6875 -2.21875 6.125 -2.21875 Z M 6.125 -2.21875 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(212.554095, 299.096821)">
          <g>
            <path d="M 0.375 -11.40625 L 8.625 -11.40625 L 8.625 -9.1875 L 5.71875 -9.1875 L 5.71875 0 L 3.28125 0 L 3.28125 -9.1875 L 0.375 -9.1875 Z M 0.375 -11.40625 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(223.047645, 299.096821)">
          <g />
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(228.970696, 299.096821)">
          <g>
            <path d="M 5.6875 -11.40625 C 6.132812 -11.40625 6.554688 -11.316406 6.953125 -11.140625 C 7.347656 -10.960938 7.691406 -10.722656 7.984375 -10.421875 C 8.285156 -10.117188 8.519531 -9.757812 8.6875 -9.34375 C 8.863281 -8.925781 8.953125 -8.484375 8.953125 -8.015625 C 8.953125 -7.546875 8.863281 -7.101562 8.6875 -6.6875 C 8.519531 -6.269531 8.285156 -5.90625 7.984375 -5.59375 C 7.691406 -5.289062 7.347656 -5.050781 6.953125 -4.875 C 6.554688 -4.695312 6.132812 -4.609375 5.6875 -4.609375 L 3.1875 -4.609375 L 3.1875 0 L 0.75 0 L 0.75 -11.40625 Z M 5.359375 -6.828125 C 5.671875 -6.828125 5.941406 -6.941406 6.171875 -7.171875 C 6.398438 -7.398438 6.515625 -7.679688 6.515625 -8.015625 C 6.515625 -8.335938 6.398438 -8.613281 6.171875 -8.84375 C 5.941406 -9.070312 5.671875 -9.1875 5.359375 -9.1875 L 3.1875 -9.1875 L 3.1875 -6.828125 Z M 5.359375 -6.828125 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(239.609095, 299.096821)">
          <g>
            <path d="M 3.203125 -2.203125 L 7.890625 -2.203125 L 7.890625 0 L 0.75 0 L 0.75 -11.40625 L 3.203125 -11.40625 Z M 3.203125 -2.203125 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(249.153148, 299.096821)">
          <g>
            <path d="M 7.765625 -11.40625 L 12.53125 0 L 9.890625 0 L 8.875 -2.453125 L 4.015625 -2.453125 L 3.015625 0 L 0.359375 0 L 5.125 -11.40625 Z M 7.953125 -4.671875 L 6.453125 -8.25 L 4.953125 -4.671875 Z M 7.953125 -4.671875 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(263.541291, 299.096821)">
          <g>
            <path d="M 8.5625 -11.40625 L 10.984375 -11.40625 L 10.984375 0 L 8.671875 0 L 3.1875 -7.453125 L 3.1875 0 L 0.75 0 L 0.75 -11.40625 L 3.046875 -11.40625 L 8.5625 -3.90625 Z M 8.5625 -11.40625 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(276.78681, 299.096821)">
          <g>
            <path d="M 8.5625 -11.40625 L 10.984375 -11.40625 L 10.984375 0 L 8.671875 0 L 3.1875 -7.453125 L 3.1875 0 L 0.75 0 L 0.75 -11.40625 L 3.046875 -11.40625 L 8.5625 -3.90625 Z M 8.5625 -11.40625 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(290.032329, 299.096821)">
          <g>
            <path d="M 4.90625 -11.40625 L 4.90625 -9.34375 L 4.0625 -9.34375 L 4.0625 -2.046875 L 4.90625 -2.046875 L 4.90625 0 L 0.75 0 L 0.75 -2.046875 L 1.609375 -2.046875 L 1.609375 -9.34375 L 0.75 -9.34375 L 0.75 -11.40625 Z M 4.90625 -11.40625 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(297.17847, 299.096821)">
          <g>
            <path d="M 8.5625 -11.40625 L 10.984375 -11.40625 L 10.984375 0 L 8.671875 0 L 3.1875 -7.453125 L 3.1875 0 L 0.75 0 L 0.75 -11.40625 L 3.046875 -11.40625 L 8.5625 -3.90625 Z M 8.5625 -11.40625 " />
          </g>
        </g>
      </g>
      <g fill="#00c2cb" fillOpacity="1">
        <g transform="translate(310.423989, 299.096821)">
          <g>
            <path d="M 6.40625 -6.453125 L 10.71875 -6.453125 L 10.71875 -2.265625 C 10.070312 -1.453125 9.359375 -0.835938 8.578125 -0.421875 C 7.796875 -0.00390625 6.972656 0.203125 6.109375 0.203125 C 5.335938 0.203125 4.609375 0.046875 3.921875 -0.265625 C 3.234375 -0.578125 2.640625 -1 2.140625 -1.53125 C 1.640625 -2.070312 1.238281 -2.695312 0.9375 -3.40625 C 0.644531 -4.125 0.5 -4.890625 0.5 -5.703125 C 0.5 -6.503906 0.644531 -7.257812 0.9375 -7.96875 C 1.238281 -8.675781 1.640625 -9.296875 2.140625 -9.828125 C 2.640625 -10.367188 3.234375 -10.796875 3.921875 -11.109375 C 4.609375 -11.421875 5.335938 -11.578125 6.109375 -11.578125 C 6.835938 -11.578125 7.523438 -11.441406 8.171875 -11.171875 C 8.828125 -10.898438 9.460938 -10.453125 10.078125 -9.828125 L 8.65625 -8.109375 C 8.207031 -8.523438 7.785156 -8.804688 7.390625 -8.953125 C 6.992188 -9.097656 6.570312 -9.171875 6.125 -9.171875 C 5.675781 -9.171875 5.253906 -9.078125 4.859375 -8.890625 C 4.472656 -8.710938 4.132812 -8.46875 3.84375 -8.15625 C 3.550781 -7.84375 3.320312 -7.472656 3.15625 -7.046875 C 2.988281 -6.628906 2.90625 -6.179688 2.90625 -5.703125 C 2.90625 -5.210938 2.988281 -4.757812 3.15625 -4.34375 C 3.320312 -3.925781 3.550781 -3.554688 3.84375 -3.234375 C 4.132812 -2.921875 4.472656 -2.671875 4.859375 -2.484375 C 5.253906 -2.304688 5.675781 -2.21875 6.125 -2.21875 C 6.53125 -2.21875 6.925781 -2.289062 7.3125 -2.4375 C 7.707031 -2.582031 8.101562 -2.820312 8.5 -3.15625 L 8.5 -4.390625 L 6.40625 -4.390625 Z M 6.40625 -6.453125 " />
          </g>
        </g>
      </g>
    </svg>
  );
};
