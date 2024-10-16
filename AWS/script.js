// Initialize charts using Chart.js

// EC2 Instances Chart
const ec2Ctx = document.getElementById('ec2Chart').getContext('2d');
new Chart(ec2Ctx, {
    type: 'doughnut',
    data: {
        labels: ['Running', 'Stopped'],
        datasets: [{
            label: 'EC2 Instances',
            data: [5, 2],
            backgroundColor: ['#36a2eb', '#ff6384'],
            borderWidth: 1,
            borderColor: '#fff',
            hoverBorderColor: '#f58536',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#1e4c7e'
                }
            }
        }
    }
});

// S3 Storage Chart
const s3Ctx = document.getElementById('s3Chart').getContext('2d');
new Chart(s3Ctx, {
    type: 'bar',
    data: {
        labels: ['Bucket 1', 'Bucket 2', 'Bucket 3'],
        datasets: [{
            label: 'Storage Used (GB)',
            data: [120, 80, 50],
            backgroundColor: ['#ff9f40', '#ffcd56', '#4bc0c0'],
            borderWidth: 1,
            borderColor: '#fff',
            hoverBorderColor: '#f58536',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#1e4c7e'
                }
            }
        }
    }
});

// RDS Connections Chart
const rdsCtx = document.getElementById('rdsChart').getContext('2d');
new Chart(rdsCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'RDS Connections',
            data: [20, 30, 25, 40],
            borderColor: '#36a2eb',
            fill: false,
            tension: 0.4,
            pointBackgroundColor: '#ff6384',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#1e4c7e'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#1e4c7e'
                }
            },
            y: {
                ticks: {
                    color: '#1e4c7e'
                }
            }
        }
    }
});
