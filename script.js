//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

        const buttonsDiv = document.getElementById("buttons");

        let currentAudio = null;

        // create buttons dynamically
        sounds.forEach(sound => {
            const btn = document.createElement("button");
            btn.classList.add("btn");
            btn.innerText = sound;

            btn.addEventListener("click", () => {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }

                const audio = new Audio(`sounds/${sound}.mp3`);
                audio.play();
                currentAudio = audio;
            });

            buttonsDiv.appendChild(btn);
        });

        // STOP BUTTON
        const stopBtn = document.createElement("button");
        stopBtn.innerText = "Stop";
        stopBtn.classList.add("btn", "stop");

        stopBtn.addEventListener("click", () => {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
        });

        buttonsDiv.appendChild(stopBtn);