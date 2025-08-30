@extends('layout')

@section('title', 'Dashboard')

@section('content')
    <!-- ===== Content Area Start ===== -->

    <!-- Small Device Overlay -->
    <div @click="sidebarToggle = false" :class="sidebarToggle ? 'block lg:hidden' : 'hidden'"
        class="fixed w-full h-screen z-9 bg-gray-900/50"></div>

    <!-- Main Content Start -->
    <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">

        <!-- Grid Container -->
        <div class="grid grid-cols-12 gap-4 md:gap-6">

            <!-- Left Column (Metrics, Charts, Tables) -->
            <div class="col-span-12 xl:col-span-7 space-y-6">

                <!-- ===== Metric Group One ===== -->
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">

                    <!-- Metric Item -->
                    <div
                        class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                        <h2 class="text-lg font-semibold text-gray-700 dark:text-white">Total Orders</h2>
                        <p class="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">1,240</p>
                    </div>

                    <div
                        class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                        <h2 class="text-lg font-semibold text-gray-700 dark:text-white">Revenue</h2>
                        <p class="mt-2 text-2xl font-bold text-gray-900 dark:text-gray-100">$45,230</p>
                    </div>

                </div>
                <!-- ===== End Metric Group One ===== -->

                <!-- ===== Chart Section ===== -->
                <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h2 class="text-lg font-semibold text-gray-700 dark:text-white mb-4">Sales Analytics</h2>
                    <div id="chart-sales" class="h-72">[Chart Placeholder]</div>
                </div>

                <!-- ===== Recent Orders Table ===== -->
                <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h2 class="text-lg font-semibold text-gray-700 dark:text-white mb-4">Recent Orders</h2>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th class="py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Order ID</th>
                                    <th class="py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Customer</th>
                                    <th class="py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                                    <th class="py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <td class="py-3 px-4">#1001</td>
                                    <td class="py-3 px-4">John Doe</td>
                                    <td class="py-3 px-4"><span
                                            class="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">Completed</span>
                                    </td>
                                    <td class="py-3 px-4">$250</td>
                                </tr>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <td class="py-3 px-4">#1002</td>
                                    <td class="py-3 px-4">Jane Smith</td>
                                    <td class="py-3 px-4"><span
                                            class="px-2 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full">Pending</span>
                                    </td>
                                    <td class="py-3 px-4">$120</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <!-- End Left Column -->

            <!-- Right Column (Side Widgets) -->
            <div class="col-span-12 xl:col-span-5 space-y-6">

                <!-- Top Products -->
                <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h2 class="text-lg font-semibold text-gray-700 dark:text-white mb-4">Top Products</h2>
                    <ul class="divide-y divide-gray-200 dark:divide-gray-800">
                        <li class="flex justify-between py-3">
                            <span>Product A</span>
                            <span class="font-semibold">$2,340</span>
                        </li>
                        <li class="flex justify-between py-3">
                            <span>Product B</span>
                            <span class="font-semibold">$1,980</span>
                        </li>
                        <li class="flex justify-between py-3">
                            <span>Product C</span>
                            <span class="font-semibold">$1,240</span>
                        </li>
                    </ul>
                </div>

                <!-- Notifications -->
                <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <h2 class="text-lg font-semibold text-gray-700 dark:text-white mb-4">Notifications</h2>
                    <ul class="space-y-3">
                        <li class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <span class="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                            New order received
                        </li>
                        <li class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <span class="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
                            Inventory low for Product B
                        </li>
                        <li class="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <span class="h-2 w-2 bg-red-500 rounded-full mr-2"></span>
                            Payment failed for Order #1003
                        </li>
                    </ul>
                </div>

            </div>
            <!-- End Right Column -->

        </div>
        <!-- End Grid Container -->

    </div>
    <!-- ===== Content Area End ===== -->
@endsection
