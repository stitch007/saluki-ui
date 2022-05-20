interface IProps {
  width?: string
  height?: string
}

export const Loading = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style={props}
    >
      <path d="M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8z" fill="currentColor" />
    </svg>
  )
}

export const ArrowLeft = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style={props}
    >
      <path
        fill="currentColor"
        d="M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z"
      />
    </svg>
  )
}

export const ArrowRight = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style={props}
    >
      <path
        fill="currentColor"
        d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z"
      />
    </svg>
  )
}

export const ArrowDown = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style={props}
    >
      <path
        fill="currentColor"
        d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
      />
    </svg>
  )
}

export const ArrowUp = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style={props}
    >
      <path
        fill="currentColor"
        d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z"
      />
    </svg>
  )
}

export const Check = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style={props}
    >
      <path
        fill="currentColor"
        d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z"
      />
    </svg>
  )
}

export const EyeClose = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 36 36"
      style={props}
    >
      <path
        fill="currentColor"
        d="M25.19 20.4a6.78 6.78 0 0 0 .43-2.4a6.86 6.86 0 0 0-6.86-6.86a6.79 6.79 0 0 0-2.37.43L18 13.23a4.78 4.78 0 0 1 .74-.06A4.87 4.87 0 0 1 23.62 18a4.79 4.79 0 0 1-.06.74Z"
      />
      <path
        fill="currentColor"
        d="M34.29 17.53c-3.37-6.23-9.28-10-15.82-10a16.82 16.82 0 0 0-5.24.85L14.84 10a14.78 14.78 0 0 1 3.63-.47c5.63 0 10.75 3.14 13.8 8.43a17.75 17.75 0 0 1-4.37 5.1l1.42 1.42a19.93 19.93 0 0 0 5-6l.26-.48Z"
      />
      <path
        fill="currentColor"
        d="m4.87 5.78l4.46 4.46a19.52 19.52 0 0 0-6.69 7.29l-.26.47l.26.48c3.37 6.23 9.28 10 15.82 10a16.93 16.93 0 0 0 7.37-1.69l5 5l1.75-1.5l-26-26Zm9.75 9.75l6.65 6.65a4.81 4.81 0 0 1-2.5.72A4.87 4.87 0 0 1 13.9 18a4.81 4.81 0 0 1 .72-2.47Zm-1.45-1.45a6.85 6.85 0 0 0 9.55 9.55l1.6 1.6a14.91 14.91 0 0 1-5.86 1.2c-5.63 0-10.75-3.14-13.8-8.43a17.29 17.29 0 0 1 6.12-6.3Z"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  )
}

export const EyeOpen = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true" role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 36 36"
      style={props}
    >
      <path
        fill="currentColor"
        d="M33.62 17.53c-3.37-6.23-9.28-10-15.82-10S5.34 11.3 2 17.53l-.28.47l.26.48c3.37 6.23 9.28 10 15.82 10s12.46-3.72 15.82-10l.26-.48Zm-15.82 8.9C12.17 26.43 7 23.29 4 18c3-5.29 8.17-8.43 13.8-8.43S28.54 12.72 31.59 18c-3.05 5.29-8.17 8.43-13.79 8.43Z"
      />
      <path fill="currentColor"
        d="M18.09 11.17A6.86 6.86 0 1 0 25 18a6.86 6.86 0 0 0-6.91-6.83Zm0 11.72A4.86 4.86 0 1 1 23 18a4.87 4.87 0 0 1-4.91 4.89Z"
      />
      <path fill="none" d="M0 0h36v36H0z"/>
    </svg>
  )
}

export const Link = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style={props}
    >
      <path
        d="M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24a2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24a2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24a.973.973 0 0 1 0-1.42z"
        fill="currentColor"
      />
    </svg>
  )
}

export const Close = (props: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style={props}
    >
      <path
        fill="currentColor"
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
      />
    </svg>
  )
}
