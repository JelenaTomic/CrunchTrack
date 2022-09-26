// comment form handler
async function commentFormHandler(event) {
    event.preventDefault();
    // declare variables
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    // gets workout name from URL and store as workout_id
    let workout_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1  
    ];
    // if statements to determine which assigns the workout_id the correct number
    if (workout_id === 'Bench%20press') {
        workout_id = 1;
    }
    if (workout_id === 'Overhead%20Press') {
        workout_id = 2;
    }
    if (workout_id === 'Tricep%20Press%20Down') {
        workout_id = 3;
    }
    if (workout_id === 'Barbell%20Squat') {
        workout_id = 4;
    }
    if(workout_id === 'Dumbbell%20Bicep%20Curls') {
        workout_id = 5
    }
    if (workout_id === 'Barbell%20Deadlifts') {
        workout_id = 6;
    }
    if (workout_id === 'Barbell%20Bench%20Press') {
        workout_id = 7;
    }
    if (workout_id === 'Face%20pulls') {
        workout_id = 8;
    }
    if (workout_id === 'Deadlifts') {
        workout_id = 9;
    }
    if (workout_id === 'Barbell%20Overhead%20press') {
        workout_id = 10;
    }
    if (workout_id === 'Bicep%20Curls') {
        workout_id = 11;
    }
    if (workout_id === 'Bent%20over%20rows') {
        workout_id = 12;
    }
    if (workout_id === 'Sumo%20Squat') {
        workout_id = 13;
    }
    if (workout_id === 'Lunges') {
        workout_id = 14;
    }
    if (workout_id === 'Calf%20Raises') {
        workout_id = 15;
    }
    if (workout_id === 'Glute%20Raises') {
        workout_id = 16;
    }
    if (workout_id === 'Leg%20curls') {
        workout_id = 17;
    }
    if (workout_id === 'Leg%20extensions') {
        workout_id = 18;
    }

    // if there is text inside textarea
    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
                body: JSON.stringify({
                    workout_id,
                    comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}
// event listener for button
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);